import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import ContactUs from './components/ContactUs';
import ContactForm from './components/ContactForm'; // Renamed earlier
import ApplyPage from './components/ApplyPage'; // Create this component
import FeedbackForm from './components/FeedbackForm'; // Import FeedbackForm
import Notification from './components/Notification'; // Import NotificationPage
import FaqPage from './components/FaqPage';
import './App.css';

function App() {
  return (
    <div className="relative min-h-screen bg-gray-50">
      <Header />
      <main className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact-form" element={<ContactForm />} />
          <Route path="/apply" element={<ApplyPage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/feedback" element={<FeedbackForm />} />
          <Route path="/faqs" element={<FaqPage />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/services" element={<ApplyPage />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact-us" element={<ContactUs />} />

        </Routes>
      </main>
      <Footer />
    </div>
  );
}

const Home = () => (
  <>
    <HeroSection id="home" />
    <AboutUs id="about-us" />
    <Services id="services" />
    <Testimonials id="testimonials" />
    <ContactUs id="contact-us" />
  </>
);

export default App;
