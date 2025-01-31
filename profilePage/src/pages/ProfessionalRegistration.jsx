

import React, { useState } from "react";

const ProfessionalRegistration = () => {
    const [image, setImage] = useState(null);
    
      const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
          setImage(URL.createObjectURL(file));
        }
      };
    
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      {/* Header Section */}
      <header className="bg-white shadow-md rounded-lg p-6 mb-8 w-11/12 max-w-4xl">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">Professional Registration</h1>
        <p className="text-gray-600 text-center">
          Join us today and offer your expertise!
        </p>
      </header>

      {/* Form Section */}
      <main className="bg-white shadow-lg rounded-lg p-8 w-11/12 max-w-4xl">
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="form-group">
            <label htmlFor="fullName" className="block text-gray-700 font-medium mb-2">Full Name</label>
            <input type="text" id="fullName" required placeholder="Enter your full name" className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400" />
          </div>
          <div className="form-group">
            <label htmlFor="location" className="block font-medium text-gray-700 mb-2">Location</label>
            <input type="text" id="location" required placeholder="City, State" className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400" />
          </div>
          <div>
            <label
              htmlFor="professionTitle"
              className="block text-gray-700 font-medium mb-2"
            >
              Profession Title
            </label>
            <input
              type="text"
              id="professionTitle"
              required
              placeholder="e.g., Plumber, Tutor"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="form-group col-span-2">
            <label htmlFor="services" className="block font-medium text-gray-700 mb-2">Services Offered</label>
            <textarea
              id="services"
              required
              placeholder="List your services..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
              rows="3"
            />
          </div>
          <div>
            <label
              htmlFor="experience"
              className="block text-gray-700 font-medium mb-2"
            >
              Experience
            </label>
            <input
              type="number"
              id="experience"
              required
              placeholder="Years of experience"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="form-group">
            <label htmlFor="certificate" className="block font-medium text-gray-700 mb-2">Experience Certificate</label>
            <input type="file" id="certificate" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200" />
          </div>

          <div className="col-span-1 md:col-span-2">
            <label
              htmlFor="availability"
              className="block text-gray-700 font-medium mb-2"
            >
              Availability Schedule
            </label>
            <div className="flex flex-wrap gap-4">
              <label className="flex items-center">
                <input type="checkbox" id="monday" className="mr-2" /> Monday
              </label>
              <label className="flex items-center">
                <input type="checkbox" id="tuesday" className="mr-2" /> Tuesday
              </label>
              <label className="flex items-center">
                <input type="checkbox" id="wednesday" className="mr-2" /> Wednesday
              </label>
              <label className="flex items-center">
                <input type="checkbox" id="thursday" className="mr-2" /> Thursday
              </label>
              <label className="flex items-center">
                <input type="checkbox" id="friday" className="mr-2" /> Friday
              </label>
              <label className="flex items-center">
                <input type="checkbox" id="saturday" className="mr-2" /> Saturday
              </label>
              <label className="flex items-center">
                <input type="checkbox" id="sunday" className="mr-2" /> Sunday
              </label>
            </div>
          </div>

          <div className="form-group col-span-2">
            <label htmlFor="imageUpload" className="block font-medium text-gray-700 mb-2">Upload Your Image (Optional)</label>
            <input
              type="file"
              id="imageUpload"
              accept="image/*"
              onChange={handleImageUpload}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
            />
            {image && <img src={image} alt="Uploaded" className="mt-4 max-w-xs rounded-lg shadow" />}
          </div>

          <div className="form-group col-span-2">
            <label htmlFor="description" className="block font-medium text-gray-700 mb-2">Description</label>
            <textarea
              id="description"
              required
              minLength="50"
              placeholder="Describe your services..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
              rows="3"
            />
          </div>
        </form>

        {/* Buttons Section */}
        <div className="mt-6 flex justify-end gap-4">
          <button
            type="reset"
            className="px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
          >
            Reset
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </main>
    </div>
  );
};

export default ProfessionalRegistration;
