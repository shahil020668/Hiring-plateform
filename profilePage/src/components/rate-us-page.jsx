import { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { useToast } from '../components/ui/use-toast';

// Interactive Star Rating Component
const StarRating = ({ rating, onRatingChange }) => {
  return (
    <div className="flex space-x-1">
      {Array.from({ length: 5 }, (_, index) => (
        <button
          key={index}
          type="button"
          onClick={() => onRatingChange(index + 1)}
          className={`text-2xl ${
            index < rating ? 'text-yellow-500' : 'text-gray-300'
          }`}
        >
          ★
        </button>
      ))}
    </div>
  );
};

export default function RateUsPage() {
  const toast = useToast();
  const [rating, setRating] = useState(0);
  const [name, setName] = useState('');
  const [review, setReview] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!rating) {
      toast({
        title: 'Error',
        description: 'Please select a rating before submitting.',
      });
      return;
    }

    const reviewData = {
      name,
      review,
      rating,
    };

    try {
      const response = await fetch('http://localhost:3030/rateus', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reviewData),
      });

      if (response.ok) {
        toast({
          title: 'Review Submitted',
          description: 'Thank you for your feedback!',
        });

        // Reset form after successful submission
        setRating(0);
        setName('');
        setReview('');
      } else {
        toast({
          title: 'Error',
          description: 'Failed to submit the review. Please try again later.',
        });
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'An error occurred. Please try again.',
      });
    }
  };

  return (
    <div className="container mx-auto py-10">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Rate Our Service</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Your Rating</label>
              <StarRating rating={rating} onRatingChange={setRating} />
            </div>
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Your Name
              </label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="review" className="block text-sm font-medium text-gray-700">
                Your Review
              </label>
              <Textarea
                id="review"
                value={review}
                onChange={(e) => setReview(e.target.value)}
                required
                placeholder="Tell us about your experience..."
                rows={4}
              />
            </div>
            <Button type="submit" className="w-full" disabled={!rating}>
              Submit Review
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
