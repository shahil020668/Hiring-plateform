import { Award, CheckCircle } from 'lucide-react'
import { useContext, useEffect, useState } from 'react'
import { DataContext } from '../context/ProfileContext'
import axios from 'axios';

export default function AboutSection() {
  const [Service, setService] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3030/service');
        setService(response.data); // Directly set fetched data
        console.log("Fetched Data:", response.data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);

  const Data = useContext(DataContext);
  return (
    <div className="p-6 border-b">
      <h2 className="text-xl font-semibold mb-4">About</h2>

      <p className="text-muted-foreground mb-6">
        {Data?.about}
      </p>

      <div className="space-y-4">
        <h3 className="font-medium">Certifications</h3>
        <div className="grid gap-3">
          {Data?.certifications.map((element, index) => (
            <div key={index} className="flex items-center gap-2">
              <Award className="w-4 h-4 text-primary" />
              <span>{element}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 space-y-4">
        <h3 className="font-medium">Services Offered</h3>
        <div className="grid gap-2">
          {Service.map((element, index) => (
            <div key={index} className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>{element.description}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

