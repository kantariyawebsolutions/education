
import React, { useEffect, useRef } from 'react';
import { GraduationCap, BookOpen } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const AcademicSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    const section = sectionRef.current;
    const cards = cardRefs.current;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });
    
    if (section) observer.observe(section);
    cards.forEach(card => {
      if (card) observer.observe(card);
    });
    
    return () => {
      if (section) observer.unobserve(section);
      cards.forEach(card => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  const faculties = [
    { 
      title: 'Business & Economics', 
      description: 'Develop the skills needed for successful careers in business, finance, and economics.',
      programs: ['Business Administration', 'Finance', 'Marketing', 'Economics'],
      icon: BookOpen
    },
    { 
      title: 'Engineering & Technology', 
      description: 'Prepare for technology-focused careers with hands-on learning and innovative research.',
      programs: ['Computer Science', 'Electrical Engineering', 'Mechanical Engineering', 'Civil Engineering'],
      icon: GraduationCap
    },
    { 
      title: 'Arts & Humanities', 
      description: 'Explore creative expression, critical thinking, and cultural understanding.',
      programs: ['English Literature', 'History', 'Philosophy', 'Fine Arts'],
      icon: BookOpen
    },
    { 
      title: 'Health Sciences', 
      description: 'Train for careers in healthcare with cutting-edge facilities and experienced faculty.',
      programs: ['Medicine', 'Nursing', 'Public Health', 'Pharmacy'],
      icon: GraduationCap
    },
    { 
      title: 'Natural Sciences', 
      description: 'Study the physical and natural world through observation and experimentation.',
      programs: ['Biology', 'Chemistry', 'Physics', 'Environmental Science'],
      icon: BookOpen
    },
    { 
      title: 'Social Sciences', 
      description: 'Examine human behavior and societal structures through diverse perspectives.',
      programs: ['Psychology', 'Sociology', 'Political Science', 'Anthropology'],
      icon: GraduationCap
    },
  ];

  return (
    <section id="academics" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="decor-circle w-96 h-96 -right-20 top-40 opacity-30" />
      <div className="absolute inset-0 pattern-grid opacity-10" />
      
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16" ref={sectionRef}>
          <h2 className="text-sm uppercase tracking-wider text-university-gold font-semibold mb-2 reveal">Academics</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6 reveal">Discover Our Academic Programs</h3>
          <p className="text-gray-600 reveal">
            AnimaVerse University offers a diverse range of undergraduate, graduate, and professional programs designed to prepare students for success in their chosen fields.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {faculties.map((faculty, index) => (
            <div 
              key={faculty.title}
              ref={el => cardRefs.current[index] = el}
              className="reveal"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <faculty.icon className="h-6 w-6 text-university-purple mr-2" />
                    <CardTitle>{faculty.title}</CardTitle>
                  </div>
                  <CardDescription>{faculty.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="text-sm font-semibold mb-2">Featured Programs:</h4>
                  <ul className="list-disc pl-5 text-gray-700 space-y-1">
                    {faculty.programs.map(program => (
                      <li key={program}>{program}</li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full university-gradient text-white">
                    Explore Programs
                  </Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcademicSection;
