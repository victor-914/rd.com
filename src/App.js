import React, { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import './index.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
// All pages
import Home from './pages/Home';
import Contact from './pages/Contact';
import AboutPage from './pages/About';

import {useDocTitle} from './components/CustomHook';
import ScrollToTop from './components/ScrollToTop';
import NavBar from './components/Navbar/NavBar';
import Register from './pages/register';
import SignInSide from './pages/signin';
import Profile from './pages/profile';


function App() {
  useEffect(() => {
    const aos_init = () => {
      AOS.init({
        once: true,
        duration: 1000,
        easing: 'ease-out-cubic',
      });
    }

    window.addEventListener('load', () => {
      aos_init();
    });
  }, []);

  useDocTitle("RD | Restorating Digital- Global payment");

  return (
    <>
      <Router>

        <NavBar/>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/register" element={<Register />} /> 
            <Route path="/login" element={<SignInSide />} /> 
            <Route path="/about" element={<AboutPage />} /> 
            <Route path="/profile" element={<Profile />} /> 
          </Routes>
        </ScrollToTop>
      </Router>
    </>
  );
}


export default App;
