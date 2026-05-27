
import React, { useState, useEffect, useRef } from 'react';
import { Quote } from 'lucide-react';

const TestimonialSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  
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
    
    // Auto-rotate testimonials
    const interval = setInterval(() => {
      setActiveTestimonial(prev => 
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 8000);
    
    return () => {
      if (section) observer.unobserve(section);
      clearInterval(interval);
    };
  }, []);

  const testimonials = [
    {
      quote: "AnimaVerse University provided me with incredible opportunities that prepared me for a successful career in technology. The supportive faculty and cutting-edge research facilities made all the difference.",
      name: "Michael Chen",
      title: "Computer Science, Class of 2023",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      quote: "The global perspective I gained at AnimaVerse has been invaluable. The diverse student body and emphasis on cross-cultural understanding gave me the skills to work effectively in international settings.",
      name: "Sophia Williams",
      title: "International Relations, Class of 2022",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      quote: "As a first-generation college student, I was worried about fitting in. The mentorship programs and supportive community at AnimaVerse helped me thrive and discover my passion for research.",
      name: "James Rodriguez",
      title: "Biochemistry, Class of 2024",
      image: "https://randomuser.me/api/portraits/men/67.jpg"
    }
  ];

  return (
    <section className="py-20 bg-university-blue text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 opacity-10">
        <Quote className="h-40 w-40 rotate-180" />
      </div>
      <div className="absolute bottom-10 right-10 opacity-10">
        <Quote className="h-40 w-40" />
      </div>
      
      <div className="container mx-auto px-4" ref={sectionRef}>
        <div className="max-w-3xl mx-auto text-center mb-16 reveal">
          <h2 className="text-sm uppercase tracking-wider text-university-gold font-semibold mb-2">Testimonials</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6">From Our Alumni</h3>
          <p className="text-white/80">
            Hear from our graduates about how their experiences at AnimaVerse University shaped their lives and careers.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.name}
              className={`transition-all duration-700 ${
                index === activeTestimonial 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 absolute top-0 left-0 right-0 translate-x-24'
              }`}
            >
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8 bg-white/10 backdrop-blur-md rounded-xl p-8">
                <div className="flex-shrink-0">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-24 h-24 object-cover rounded-full border-4 border-university-gold"
                  />
                </div>
                <div>
                  <Quote className="h-8 w-8 text-university-gold mb-2" />
                  <p className="text-xl italic mb-6">{testimonial.quote}</p>
                  <div>
                    <h4 className="font-bold text-xl">{testimonial.name}</h4>
                    <p className="text-white/70">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {/* Indicator dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`h-3 w-3 rounded-full transition-all duration-300 ${
                  activeTestimonial === index ? 'bg-university-gold w-6' : 'bg-white/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
