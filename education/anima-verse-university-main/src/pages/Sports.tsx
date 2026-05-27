import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Trophy } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const sports = [
  { name: 'Basketball', type: 'Varsity & Intramural' },
  { name: 'Soccer', type: 'Varsity & Club' },
  { name: 'Swimming', type: 'Varsity' },
  { name: 'Tennis', type: 'Varsity & Recreational' },
  { name: 'Track & Field', type: 'Varsity' },
  { name: 'Volleyball', type: 'Varsity & Intramural' },
  { name: 'Cricket', type: 'Club' },
  { name: 'Yoga & Fitness', type: 'Recreational' },
];

const Sports = () => (
  <div className="relative">
    <Navbar />
    <section className="pt-32 pb-20 container mx-auto px-4">
      <Link to="/" className="inline-flex items-center text-university-purple mb-6 hover:underline">
        <ArrowLeft className="h-4 w-4 mr-2" /> Back to Home
      </Link>
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Athletics & Recreation</h1>
      <p className="text-gray-600 max-w-2xl mb-12">
        From varsity competition to casual recreation, AnimaVerse offers programs for every skill level.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sports.map(s => (
          <div key={s.name} className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <Trophy className="h-8 w-8 text-university-purple mb-3" />
            <h3 className="text-xl font-bold mb-1">{s.name}</h3>
            <p className="text-gray-500 mb-4">{s.type}</p>
            <Button variant="outline" size="sm">Learn More</Button>
          </div>
        ))}
      </div>
    </section>
    <Footer />
  </div>
);

export default Sports;
