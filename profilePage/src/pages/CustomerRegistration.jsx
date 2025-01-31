import React, { useState } from "react";

const CustomerRegistration = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const cities = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];
  const states = ["New York", "California", "Illinois", "Texas", "Arizona"];
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    zipCode: "",
    city: "",
    state: "",
    address: "",
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (confirmPassword && e.target.value !== confirmPassword) {
      setPasswordError("Passwords do not match");
    } else {
      setPasswordError("");
    }
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    if (password && e.target.value !== password) {
      setPasswordError("Passwords do not match");
    } else {
      setPasswordError("");
    }
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleReset = () => {
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      zipCode: "",
      city: "",
      state: "",
      address: "",
    });
    setPassword("");
    setConfirmPassword("");
    setPasswordError("");
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (password !== confirmPassword) {
      setPasswordError("Passwords do not match");
      return;
    }

    const dataToSend = {
      ...formData,
      password,
    };

    try {
      // Sending data to the backend
      const response = await fetch("http://localhost:3030/cusregister", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });

      if (response.ok) {
        alert("Registration successful!");
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          zipCode: "",
          city: "",
          state: "",
          address: "",
        });
        setPassword("");
        setConfirmPassword("");
        setPasswordError("");
      } else {
        alert("Registration failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during registration:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      {/* Header Section */}
      <header className="bg-white shadow-md rounded-lg p-6 mb-8 w-11/12 max-w-4xl">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">Customer Registration</h1>
        <p className="text-gray-600 text-center">
          Fill out the form below to register as a customer. It's quick and easy!
        </p>
      </header>

      {/* Form Section */}
      <main className="bg-white shadow-lg rounded-lg p-8 w-11/12 max-w-4xl">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="fullName" className="block text-gray-700 font-medium mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={handlePasswordChange}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400"
                required
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>
          <div>
            <label htmlFor="confirmPassword" className="block text-gray-700 font-medium mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400"
              required
            />
            {passwordError && <p className="text-red-500 text-sm mt-1">{passwordError}</p>}
          </div>
          <div>
            <label htmlFor="zipCode" className="block text-gray-700 font-medium mb-2">
              ZIP Code
            </label>
            <input
              type="text"
              id="zipCode"
              placeholder="Enter your ZIP code"
              value={formData.zipCode}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div>
            <label htmlFor="city" className="block text-gray-700 font-medium mb-2">
              City
            </label>
            <select
              id="city"
              value={formData.city}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400"
              required
            >
              <option value="">Select your city</option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="state" className="block text-gray-700 font-medium mb-2">
              State
            </label>
            <select
              id="state"
              value={formData.state}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400"
              required
            >
              <option value="">Select your state</option>
              {states.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </div>
          <div className="col-span-1 md:col-span-2">
            <label htmlFor="address" className="block text-gray-700 font-medium mb-2">
              Address
            </label>
            <textarea
              id="address"
              placeholder="Enter your address"
              value={formData.address}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400"
              rows="3"
              required
            ></textarea>
          </div>
        </form>

        {/* Buttons Section */}
        <div className="mt-6 flex justify-end gap-4">
          <button
            type="button" // Change type to "button" to avoid triggering form submit
            onClick={handleReset}
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

export default CustomerRegistration;
