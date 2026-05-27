import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Palette } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const events = [
  { name: 'Annual Art Exhibition', date: 'Oct 15 - Nov 5' },
  { name: 'Symphony Orchestra Concert', date: 'Nov 12' },
  { name: 'Theater Production: Hamlet', date: 'Nov 20 - 22' },
  { name: 'Cultural Diversity Festival', date: 'Dec 3' },
  { name: 'Student Film Festival', date: 'Dec 10' },
  { name: 'Dance Showcase', date: 'Jan 18' },
];

const Arts = () => (
  <div className="relative">
    <Navbar />
    <section className="pt-32 pb-20 container mx-auto px-4">
      <Link to="/" className="inline-flex items-center text-university-gold mb-6 hover:underline">
        <ArrowLeft className="h-4 w-4 mr-2" /> Back to Home
      </Link>
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Arts & Culture</h1>
      <p className="text-gray-600 max-w-2xl mb-12">
        Experience exhibitions, performances, and cultural celebrations that bring our campus to life.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map(e => (
          <div key={e.name} className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <Palette className="h-8 w-8 text-university-gold mb-3" />
            <h3 className="text-xl font-bold mb-1">{e.name}</h3>
            <p className="text-gray-500 mb-4">{e.date}</p>
            <Button variant="outline" size="sm">RSVP</Button>
          </div>
        ))}
      </div>
    </section>
    <Footer />
  </div>
);

export default Arts;
