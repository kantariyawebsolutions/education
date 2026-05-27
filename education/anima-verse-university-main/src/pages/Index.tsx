
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import AcademicSection from '../components/AcademicSection';
import CampusLifeSection from '../components/CampusLifeSection';
import EventsSection from '../components/EventsSection';
import TestimonialSection from '../components/TestimonialSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';

const Index = () => {
  return (
    <div className="relative">
      <ScrollReveal />
      <Navbar />
      <Hero />
      <AboutSection />
      <AcademicSection />
      <CampusLifeSection />
      <EventsSection />
      <TestimonialSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
