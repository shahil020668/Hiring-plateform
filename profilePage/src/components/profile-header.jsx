import React, { useState, useEffect, useContext } from "react";
import { Button } from "../components/ui/button";
import { Star, MessageCircle, MapPin } from "lucide-react";
import profileContext, { DataContext } from "../context/ProfileContext";

export default function ProfileHeader() {

  const Data = useContext(DataContext);
  
  const [filledStars, setFilledStars] = useState(0)

  const rating = Data?.ratings;

  useEffect(() => {
    let timer;
    const roundedRating = Math.round(rating);
    if (filledStars < roundedRating) {
      timer = setTimeout(() => {
        setFilledStars((prev) => prev + 1);
      }, 500);
    }
    return () => clearTimeout(timer);
  }, [filledStars, rating]);

  

  return (
    <div className="flex flex-col md:flex-row gap-6 items-start p-6 border-b">
      <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0">
        <img
          src={`http://localhost:3030${Data?.profileImage}`}
          alt="Profile"
          height="128"
          width="128"
          className="profile-image w-full h-full object-cover rounded-full"
        />
      </div>

      <div className="flex-1">
        <div className="flex flex-col md:flex-row md:items-center gap-4 justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold">{Data?.name}</h1>
            <p className="text-lg text-muted-foreground">{Data?.profession}</p>
            <div className="flex items-center gap-2 mt-2">
              <MapPin className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">{Data?.location}</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button className="w-full sm:w-auto">Hire Now</Button>
            <Button variant="outline" className="w-full sm:w-auto">
              <MessageCircle className="w-4 h-4 mr-2" />
              Message
            </Button>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`w-6 h-6 transition-colors duration-500 ${
                  star <= filledStars ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="text-sm font-medium">{rating}</span>
          <span className="text-sm text-muted-foreground">({Data?.reviewsCount} reviews)</span>
        </div>
      </div>
    </div>
  );
}
