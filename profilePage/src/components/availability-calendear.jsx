import { useContext, useEffect, useState } from "react";
import { Calendar } from "./ui/calender";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { DataContext } from "../context/ProfileContext";

export default function AvailabilityCalendar() {
  const [date, setDate] = useState(new Date()); // Selected date
  const [selectedTime, setSelectedTime] = useState(null); // Selected time slot
  const [selectedService, setSelectedService] = useState(null); // Selected service
  const [isBooked, setIsBooked] = useState(false); // Booking status
  const profileData = useContext(DataContext);
  const [timeSlots, setTimeSlots] = useState([]);

  const services = ["Haircut", "Shave", "Facial", "Massage"]; // List of services

  // Generate time slots based on selected date
  useEffect(() => {
    const selectedDay = date?.toLocaleDateString("en-US", { weekday: "long" });
    const dayAvailability = profileData?.availability?.find(
      (day) => day.day === selectedDay && day.selected
    );

    if (dayAvailability) {
      const slots = [];
      dayAvailability.times.forEach(({ startTime, endTime }) => {
        let start = new Date(`1970-01-01T${startTime}:00`);
        const end = new Date(`1970-01-01T${endTime}:00`);
        while (start < end) {
          const nextHour = new Date(start.getTime() + 60 * 60 * 1000); // Add one hour
          slots.push(
            `${start.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })} - ${nextHour.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}`
          );
          start = new Date(start.getTime() + 60 * 60 * 1000); // Increment by one hour
        }
      });
      setTimeSlots(slots);
    } else {
      setTimeSlots([]);
    }
  }, [date, profileData]);

  // Handle time slot selection
  const handleTimeSelect = (time) => {
    setSelectedTime(time);
    setSelectedService(null); // Reset service selection
  };

  // Handle service selection
  const handleServiceSelect = (service) => {
    setSelectedService(service);
  };

  // Handle booking confirmation
  const handleBooking = async (e) => {
    e.preventDefault();
    if (selectedTime && selectedService) {
      const bookingDetails = {
        date: date.toLocaleDateString("en-CA"), // Format for backend
        time: selectedTime,
        service: selectedService,
      };

      try {
        const response = await fetch("http://localhost:3030/bookings", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(bookingDetails),
        });

        if (response.ok) {
          setIsBooked(true);
        } else {
          alert("Failed to book the slot. Please try again.");
        }
      } catch (error) {
        alert("An error occurred while booking. Please try again.");
      }
    } else {
      alert("Please select both a time slot and a service.");
    }
  };

  return (
    <div className="p-6 border-b">
      <h2 className="text-xl font-semibold mb-4">Availability</h2>

      <Card>
        <CardContent className="p-4">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Calendar */}
            <Calendar
              selected={date}
              onSelect={(date) => setDate(date)} // Update selected date
              disabledDates={["2024-12-25", "2024-12-31"]}
              className="rounded-md border"
            />

            <div className="space-y-4">
              <h3 className="font-medium">Available Time Slots</h3>
              <div className="grid grid-cols-2 gap-2">
                {timeSlots.length > 0 ? (
                  timeSlots.map((slot, index) => (
                    <Button
                      key={index}
                      className={`w-full ${selectedTime === slot ? "bg-blue-500 text-white" : "border"
                        }`}
                      onClick={() => handleTimeSelect(slot)}
                    >
                      {slot}
                    </Button>
                  ))
                ) : (
                  <div className="flex items-center justify-center h-full w-full">
                    <p className="text-center text-gray-500">No time slots available for the selected day.</p>
                  </div>
                )}
              </div>

              {/* Display services if time slot is selected */}
              {selectedTime && (
                <div>
                  <h3 className="font-medium mt-4">Select a Service</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {services.map((service) => (
                      <Button
                        key={service}
                        variant={selectedService === service ? "default" : "outline"}
                        className={`w-full ${selectedService === service ? "bg-green-500 text-white" : "border"
                          }`}
                        onClick={() => handleServiceSelect(service)}
                      >
                        {service}
                      </Button>
                    ))}
                  </div>
              {/* Booking confirmation */}
              {selectedService && (
                <div className="mt-4">
                  <p className="text-sm">You have selected: {selectedService} service</p>
                </div>
              )}

              {isBooked ? (
                <p className="text-sm text-green-500 mt-4">
                  Your slot has been booked successfully!
                </p>
              ) : (
                <Button onClick={handleBooking} className="w-full mt-4 bg-blue-500 text-white">
                  Book Now
                </Button>
              )}

              <p className="text-sm text-muted-foreground mt-2">
                Book your slot now to secure availability!
              </p>
            </div> )}

              {/* Booking confirmation */}
              {selectedService && (
                <div className="mt-4">
                  <p className="text-sm">You have selected: {selectedService} service</p>
                </div>
              )}

              {isBooked ? (
                <p className="text-sm text-green-500 mt-4">
                  Your slot has been booked successfully!
                </p>
              ) : (
                <Button onClick={handleBooking} className="w-full mt-4 bg-blue-500 text-white">
                  Book Now
                </Button>
              )}

              <p className="text-sm text-muted-foreground mt-2">
                Book your slot now to secure availability!
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
