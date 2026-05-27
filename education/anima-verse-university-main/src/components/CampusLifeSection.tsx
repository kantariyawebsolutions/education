
import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import sportsFacilitiesImg from '@/assets/sports-facilities.jpg';
import studentDormitoriesImg from '@/assets/student-dormitories.jpg';

const CampusLifeSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    const section = sectionRef.current;
    const images = imageRefs.current;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });
    
    if (section) observer.observe(section);
    images.forEach(img => {
      if (img) observer.observe(img);
    });
    
    return () => {
      if (section) observer.unobserve(section);
      images.forEach(img => {
        if (img) observer.unobserve(img);
      });
    };
  }, []);

  const campusImages = [
    {
      src: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sbGVnZSUyMGNhbXB1c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
      alt: "Beautiful campus grounds",
      title: "Campus Grounds"
    },
    {
      src: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y29sbGVnZSUyMGxpYnJhcnl8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
      alt: "Modern library",
      title: "Library"
    },
    {
      src: sportsFacilitiesImg,
      alt: "Sports facilities",
      title: "Sports Facilities"
    },
    {
      src: studentDormitoriesImg,
      alt: "Student dormitories",
      title: "Student Housing"
    },
    {
      src: "https://images.unsplash.com/photo-1470753323753-3f8091bb0232?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dW5pdmVyc2l0eSUyMGV2ZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
      alt: "Student events",
      title: "Campus Events"
    },
    {
      src: "https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29sbGVnZSUyMGNhZmV0ZXJpYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
      alt: "Campus dining",
      title: "Dining Halls"
    }
  ];

  return (
    <section id="campus-life" className="py-20 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="decor-circle w-96 h-96 -left-20 bottom-40 opacity-30" />
      <div className="absolute inset-0 pattern-grid opacity-10" />
      
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16" ref={sectionRef}>
          <h2 className="text-sm uppercase tracking-wider text-university-gold font-semibold mb-2 reveal">Campus Life</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6 reveal">Experience Life at AnimaVerse</h3>
          <p className="text-gray-600 reveal">
            Our vibrant campus community offers countless opportunities for students to learn, grow, and thrive outside the classroom.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {campusImages.map((image, index) => (
            <div 
              key={image.title} 
              className="reveal h-80 relative overflow-hidden rounded-lg group"
              ref={el => imageRefs.current[index] = el}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <h4 className="text-white text-xl font-bold">{image.title}</h4>
              </div>
            </div>
          ))}
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-university-blue text-white reveal">
            <CardContent className="p-6">
              <h4 className="text-xl font-bold mb-4">Student Organizations</h4>
              <p className="mb-4">
                With over 200 student clubs and organizations, there's something for everyone to pursue their interests and develop leadership skills.
              </p>
              <Button asChild variant="outline" className="text-blue border-white hover:bg-white hover:text-university-blue">
                <Link to="/clubs">Explore Clubs</Link>
              </Button>
            </CardContent>
          </Card>
          
          <Card className="bg-university-purple text-white reveal">
            <CardContent className="p-6">
              <h4 className="text-xl font-bold mb-4">Athletics & Recreation</h4>
              <p className="mb-4">
                From varsity sports to intramural leagues and fitness classes, our athletics program offers opportunities for all skill levels.
              </p>
              <Button asChild variant="outline" className="text-purple border-white hover:bg-white hover:text-university-purple">
                <Link to="/sports">View Sports</Link>
              </Button>
            </CardContent>
          </Card>
          
          <Card className="bg-university-gold text-white reveal">
            <CardContent className="p-6">
              <h4 className="text-xl font-bold mb-4">Arts & Culture</h4>
              <p className="mb-4">
                Experience art exhibitions, musical performances, theater productions, and cultural events that enrich our campus community.
              </p>
              <Button asChild variant="outline" className="text-gold border-white hover:bg-white hover:text-university-gold">
                <Link to="/arts">See Events</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CampusLifeSection;
