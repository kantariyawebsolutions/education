
import React, { useEffect, useRef } from 'react';
import { University, Users, Book, Calendar } from 'lucide-react';

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const statsRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    const section = sectionRef.current;
    const stats = statsRefs.current;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });
    
    if (section) {
      observer.observe(section);
    }
    
    stats.forEach(stat => {
      if (stat) observer.observe(stat);
    });
    
    return () => {
      if (section) observer.unobserve(section);
      stats.forEach(stat => {
        if (stat) observer.unobserve(stat);
      });
    };
  }, []);
  
  const stats = [
    { icon: University, value: '1892', label: 'Year Founded', color: 'text-university-blue' },
    { icon: Users, value: '30,000+', label: 'Students Enrolled', color: 'text-university-purple' },
    { icon: Book, value: '200+', label: 'Programs Offered', color: 'text-university-red' },
    { icon: Calendar, value: '125+', label: 'Years of Excellence', color: 'text-university-gold' },
  ];
  
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="decor-circle w-96 h-96 -left-20 top-40 opacity-30" />
      <div className="absolute inset-0 pattern-grid opacity-10" />
      
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16" ref={sectionRef}>
          <h2 className="text-sm uppercase tracking-wider text-university-gold font-semibold mb-2 reveal">About Us</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6 reveal">
            Excellence in Education for Over a Century
          </h3>
          <p className="text-gray-600 reveal">
            AnimaVerse University has been at the forefront of education and research since its founding in 1892. Our mission is to inspire and empower students to reach their full potential and make meaningful contributions to society through education, research, and service.
          </p>
        </div>
        
        {/* Stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={stat.label} 
              className="bg-white rounded-lg shadow-lg p-6 text-center reveal"
              ref={el => statsRefs.current[index] = el}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`mx-auto p-3 rounded-full bg-opacity-10 inline-flex mb-4 ${stat.color.replace('text', 'bg')}`}>
                <stat.icon className={`h-8 w-8 ${stat.color}`} />
              </div>
              <h4 className="text-3xl font-bold mb-2">{stat.value}</h4>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-8 reveal">
            <h4 className="text-2xl font-bold mb-4 text-university-blue">Our Mission</h4>
            <p className="text-gray-600">
              To cultivate a dynamic learning environment where students develop critical thinking skills, embrace diversity, and become innovative leaders prepared to address global challenges with integrity and compassion.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8 reveal">
            <h4 className="text-2xl font-bold mb-4 text-university-purple">Our Vision</h4>
            <p className="text-gray-600">
              To be recognized globally as a premier institution that transforms lives through exceptional educational experiences, groundbreaking research, and meaningful community engagement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
