
import React, { useState, useRef, useEffect } from 'react';
import { Calendar, ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const EventsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const eventsContainerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const section = sectionRef.current;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });
    
    if (section) observer.observe(section);
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const events = [
    {
      title: 'Spring Open House',
      date: 'April 15, 2025',
      time: '10:00 AM - 3:00 PM',
      location: 'Main Campus',
      category: 'Admissions',
      description: 'Explore our campus, meet faculty, and learn about academic programs and student life.',
    },
    {
      title: 'Research Symposium',
      date: 'May 5, 2025',
      time: '9:00 AM - 5:00 PM',
      location: 'Science Center',
      category: 'Academic',
      description: 'Annual showcase of student and faculty research projects across all disciplines.',
    },
    {
      title: 'Spring Concert',
      date: 'May 12, 2025',
      time: '7:00 PM',
      location: 'University Auditorium',
      category: 'Arts',
      description: 'Join us for an evening of music featuring our university symphony orchestra and choir.',
    },
    {
      title: 'Career Fair',
      date: 'May 18, 2025',
      time: '11:00 AM - 4:00 PM',
      location: 'Student Union',
      category: 'Career',
      description: 'Connect with over 100 employers from various industries offering jobs and internships.',
    },
    {
      title: 'Alumni Weekend',
      date: 'June 10-12, 2025',
      time: 'All Day',
      location: 'Campus-wide',
      category: 'Community',
      description: 'Welcome back alumni for a weekend of reconnecting, special events, and celebrations.',
    },
  ];

  const getCategoryColor = (category: string) => {
    switch(category) {
      case 'Admissions': return 'bg-university-blue';
      case 'Academic': return 'bg-university-purple';
      case 'Arts': return 'bg-university-red';
      case 'Career': return 'bg-university-gold';
      case 'Community': return 'bg-green-600';
      default: return 'bg-gray-600';
    }
  };

  const nextSlide = () => {
    setActiveIndex((prev) => 
      prev === events.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setActiveIndex((prev) => 
      prev === 0 ? events.length - 1 : prev - 1
    );
  };

  return (
    <section id="events" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="decor-circle w-96 h-96 -right-20 bottom-40 opacity-30" />
      <div className="absolute inset-0 pattern-grid opacity-10" />
      
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16" ref={sectionRef}>
          <h2 className="text-sm uppercase tracking-wider text-university-gold font-semibold mb-2 reveal">Events & News</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6 reveal">Upcoming University Events</h3>
          <p className="text-gray-600 reveal">
            Stay connected with the latest happenings, events, and news across our vibrant campus community.
          </p>
        </div>
        
        <div className="relative mb-12" ref={eventsContainerRef}>
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {events.map((event, index) => (
                <div key={event.title} className="w-full flex-shrink-0 px-4">
                  <Card className="overflow-hidden">
                    <CardHeader className="bg-gray-50 border-b">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Calendar className="h-5 w-5 text-university-blue mr-2" />
                          <span className="font-medium">{event.date}</span>
                        </div>
                        <Badge className={`${getCategoryColor(event.category)}`}>
                          {event.category}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6">
                      <h4 className="text-2xl font-bold mb-4">{event.title}</h4>
                      <div className="mb-4">
                        <div className="text-sm text-gray-600 mb-1">
                          <span className="font-medium">Time:</span> {event.time}
                        </div>
                        <div className="text-sm text-gray-600">
                          <span className="font-medium">Location:</span> {event.location}
                        </div>
                      </div>
                      <p className="text-gray-700">{event.description}</p>
                    </CardContent>
                    <CardFooter className="border-t bg-gray-50 p-4">
                      <Button className="w-full bg-university-blue hover:bg-university-blue/90">
                        Learn More
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation arrows */}
          <button 
            onClick={prevSlide}
            className="absolute top-1/2 left-0 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md z-10"
            aria-label="Previous event"
          >
            <ArrowLeft className="h-6 w-6 text-university-blue" />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute top-1/2 right-0 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md z-10"
            aria-label="Next event"
          >
            <ArrowRight className="h-6 w-6 text-university-blue" />
          </button>
          
          {/* Dots indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {events.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-3 w-3 rounded-full transition-all duration-300 ${
                  activeIndex === index ? 'bg-university-blue w-6' : 'bg-gray-300'
                }`}
                aria-label={`Go to event ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        <div className="text-center reveal">
          <Button variant="outline" className="border-university-purple text-university-purple hover:bg-university-purple/10">
            View All Events
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
