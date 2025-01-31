import { useEffect, useState } from 'react';
import { Dialog, DialogContent } from "../components/ui/dialog";
import { Card } from "../components/ui/card";
import axios from "axios";

export default function PortfolioSection() {
  const [selectedImage, setSelectedImage] = useState(null); // Ensure initial state is null
  const [Data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3030/port');
        setData(response.data); // Directly set fetched data
        // console.log("Fetched Data:", response.data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-6 border-b">
      <h2 className="text-xl font-semibold mb-4">Portfolio</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {Data.map((image) => (
          <Card 
            key={image._id} // Use unique _id as key
            className="cursor-pointer overflow-hidden"
            onClick={() => setSelectedImage(image)}
          >
            <img
              src={`http://localhost:3030${image.imageUrl}`} // Prepend base URL
              alt={image.title}
              className="w-full h-48 object-cover transition-transform hover:scale-105"
            />
          </Card>
        ))}
      </div>

      {selectedImage && (
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-3xl">
            <img
              src={`http://localhost:3030${selectedImage.imageUrl}`} // Prepend base URL
              alt={selectedImage.title}
              className="w-full h-auto"
            />
            <p className="mt-2 text-center font-medium">{selectedImage.title}</p>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
