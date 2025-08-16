'use client';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // CSS import required

const AOSProvider = () => {
  useEffect(() => {
    AOS.init({
        
      
    });
  }, []);

  return null; // No UI, just initialization
};

export default AOSProvider;
