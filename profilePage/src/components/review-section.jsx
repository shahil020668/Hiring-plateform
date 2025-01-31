import { Star } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar"
import { useEffect, useState } from 'react';

import axios from 'axios';

export default function ReviewsSection() {

  const [Data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3030/review');
        setData(response.data);
        // console.log("Fetched Data:", response.data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);
  
  return (
    <div className="p-6 border-b">
      <h2 className="text-xl font-semibold mb-4">Reviews</h2>

      <div className="space-y-6">
        {Data.map((review) => (
          <div key={review.id} className="flex gap-4">
            <Avatar className="w-10 h-10">
              <AvatarImage src={`http://localhost:3030${review.customerImg}`} alt={`${review.customerName}'s Avatar`} className="rounded-full" />
              <AvatarFallback>{review.customerName[0]}</AvatarFallback>
            </Avatar>


            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <h3 className="font-medium">{review.customerName}</h3>
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`w-4 h-4 ${star <= review.rating
                              ? "text-yellow-400 fill-yellow-400"
                              : "text-gray-300"
                            }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">{review.date}</span>
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground">{review.comment}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

