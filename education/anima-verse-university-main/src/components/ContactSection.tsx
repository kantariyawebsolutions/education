
import React, { useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Phone, Mail } from 'lucide-react';

const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  
  useEffect(() => {
    const section = sectionRef.current;
    const form = formRef.current;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });
    
    if (section) observer.observe(section);
    if (form) observer.observe(form);
    
    return () => {
      if (section) observer.unobserve(section);
      if (form) observer.unobserve(form);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would handle form submission in a real app
    console.log('Form submitted');
    alert('Thank you for your message! We will get back to you shortly.');
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="decor-circle w-96 h-96 -left-20 top-20 opacity-30" />
      <div className="absolute inset-0 pattern-grid opacity-10" />
      
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16" ref={sectionRef}>
          <h2 className="text-sm uppercase tracking-wider text-university-gold font-semibold mb-2 reveal">Contact Us</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6 reveal">Get in Touch</h3>
          <p className="text-gray-600 reveal">
            Have questions about admissions, campus visits, or anything else? We're here to help.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="text-center reveal">
            <CardContent className="p-6">
              <div className="mx-auto p-3 rounded-full bg-university-blue/10 inline-flex mb-4">
                <MapPin className="h-6 w-6 text-university-blue" />
              </div>
              <h4 className="font-bold mb-2">Visit Us</h4>
              <p className="text-gray-600">
                123 University Avenue<br />
                Academic City, ST 12345<br />
                United States
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center reveal">
            <CardContent className="p-6">
              <div className="mx-auto p-3 rounded-full bg-university-purple/10 inline-flex mb-4">
                <Phone className="h-6 w-6 text-university-purple" />
              </div>
              <h4 className="font-bold mb-2">Call Us</h4>
              <p className="text-gray-600">
                Admissions: (123) 456-7890<br />
                Student Services: (123) 456-7891<br />
                Main Office: (123) 456-7892
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center reveal">
            <CardContent className="p-6">
              <div className="mx-auto p-3 rounded-full bg-university-gold/10 inline-flex mb-4">
                <Mail className="h-6 w-6 text-university-gold" />
              </div>
              <h4 className="font-bold mb-2">Email Us</h4>
              <p className="text-gray-600">
                admissions@animaverse.edu<br />
                info@animaverse.edu<br />
                support@animaverse.edu
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} ref={formRef} className="space-y-6 reveal">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Name</label>
                    <Input id="name" placeholder="Your Name" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                    <Input id="email" type="email" placeholder="Your Email" required />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                  <Input id="subject" placeholder="Subject" required />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Message</label>
                  <Textarea id="message" placeholder="Your Message" rows={5} required />
                </div>
                
                <Button type="submit" className="w-full bg-university-blue hover:bg-university-blue/90">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
