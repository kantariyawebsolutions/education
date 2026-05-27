import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const clubs = [
  { name: 'Robotics Club', desc: 'Design, build, and compete with autonomous robots.' },
  { name: 'Debate Society', desc: 'Sharpen your public speaking and critical thinking.' },
  { name: 'Drama Guild', desc: 'Stage productions, acting workshops, and improv nights.' },
  { name: 'Coding Collective', desc: 'Hackathons, open-source projects, and tech talks.' },
  { name: 'Environmental Society', desc: 'Sustainability initiatives and campus green projects.' },
  { name: 'Photography Club', desc: 'Photo walks, exhibitions, and darkroom sessions.' },
  { name: 'Entrepreneurship Cell', desc: 'Pitch nights, mentorship, and startup incubation.' },
  { name: 'Music Society', desc: 'Bands, choirs, and open-mic events year-round.' },
];

const Clubs = () => (
  <div className="relative">
    <Navbar />
    <section className="pt-32 pb-20 container mx-auto px-4">
      <Link to="/" className="inline-flex items-center text-university-blue mb-6 hover:underline">
        <ArrowLeft className="h-4 w-4 mr-2" /> Back to Home
      </Link>
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Student Organizations</h1>
      <p className="text-gray-600 max-w-2xl mb-12">
        Discover 200+ student-led clubs at AnimaVerse University. Pursue your passion, build leadership skills, and find your community.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {clubs.map(c => (
          <div key={c.name} className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold mb-2 text-university-blue">{c.name}</h3>
            <p className="text-gray-600 mb-4">{c.desc}</p>
            <Button variant="outline" size="sm">Join Club</Button>
          </div>
        ))}
      </div>
    </section>
    <Footer />
  </div>
);

export default Clubs;
