'use client'

import 'aos/dist/aos.css';
import Aos from 'aos';
import { useEffect } from 'react';

const AOSContainer = ({ children }) => {
  useEffect(() => {
    Aos.init({
      duration: 800,
      once: false,
    });
  }, []);
  return (
    <>{children}</>
  )
}

export default AOSContainer