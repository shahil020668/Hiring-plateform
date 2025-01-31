import { Routes, Route } from 'react-router-dom';
import ProfilePage from './pages/profile';
import LoginPage from './pages/LoginPage';
import CustomerRegistration from './pages/CustomerRegistration';
import Navbar from './components/Navbar';
import ProfessionalRegistration from './pages/ProfessionalRegistration';
import Header from './components/Header';
import Footer from './components/Footer';

import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  
  return (
    <div>
      {/* Uncomment and use these when necessary */}
      
      <Header />
      <Navbar />
      <Routes>
        <Route path='/' element={<ProfilePage />}/>
        <Route path='/login' element={<LoginPage />}/>
        <Route path='/register' element={<CustomerRegistration />} />
        <Route path='/professional-registration' element={<ProfessionalRegistration />} />
        <Route path='/customer-registration' element={<CustomerRegistration />} />
      </Routes>
      <Footer /> 
     
    </div>
  );
}

export default App;
