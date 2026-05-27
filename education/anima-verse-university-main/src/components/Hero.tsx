
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const keywords = ['Innovation', 'Excellence', 'Discovery', 'Leadership', 'Success'];
  const [currentKeyword, setCurrentKeyword] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    const keywordInterval = setInterval(() => {
      setCurrentKeyword(prev => (prev + 1) % keywords.length);
    }, 3000);
    
    return () => clearInterval(keywordInterval);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background decorative elements */}
      <div className="decor-circle w-96 h-96 top-20 right-20 animate-spin-slow" />
      <div className="decor-circle w-72 h-72 bottom-10 left-10 animate-spin-slow" style={{ animationDirection: 'reverse' }} />
      <div className="absolute inset-0 pattern-grid opacity-30" />

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 
            className={`text-university-gold text-xl md:text-2xl font-medium mb-4 transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            style={{ transitionDelay: '200ms' }}
          >
            Welcome to
          </h2>
          <h1 
            className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-university-blue transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: '400ms' }}
          >
            AnimaVerse University
          </h1>
          <p 
            className={`text-xl md:text-2xl mb-3 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: '600ms' }}
          >
            Where Ambition Meets
          </p>
          <div className="h-16 overflow-hidden mb-8">
            {keywords.map((keyword, index) => (
              <p 
                key={keyword}
                className={`text-2xl md:text-4xl font-bold text-university-purple transition-all duration-500 ${currentKeyword === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
              >
                {keyword}
              </p>
            ))}
          </div>
          <p 
            className={`text-gray-600 text-lg md:text-xl mb-8 max-w-2xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: '800ms' }}
          >
            Join a community dedicated to academic excellence, innovation, and preparing leaders for tomorrow's challenges.
          </p>
          <div 
            className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: '1000ms' }}
          >
            <Button size="lg" className="bg-university-blue hover:bg-university-blue/90 text-white">
              Explore Programs
            </Button>
            <Button size="lg" variant="outline" className="border-university-purple text-university-purple hover:bg-university-purple/10">
              Take a Campus Tour <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Animated scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 rounded-full border-2 border-university-blue flex items-start justify-center p-1">
            <div className="w-1 h-3 bg-university-blue rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
