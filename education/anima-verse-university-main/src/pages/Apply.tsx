import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, GraduationCap, CheckCircle2 } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from '@/components/ui/select';
import { toast } from '@/hooks/use-toast';

const Apply = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    program: '', startTerm: '', message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.firstName || !form.lastName || !form.email || !form.program) {
      toast({ title: 'Missing info', description: 'Please fill all required fields.', variant: 'destructive' });
      return;
    }
    setSubmitted(true);
    toast({ title: 'Application submitted!', description: "We'll be in touch soon." });
  };

  return (
    <div className="relative min-h-screen">
      <Navbar />
      <section className="pt-32 pb-20 container mx-auto px-4">
        <Link to="/" className="inline-flex items-center text-university-blue mb-6 hover:underline">
          <ArrowLeft className="h-4 w-4 mr-2" /> Back to Home
        </Link>

        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <GraduationCap className="h-12 w-12 text-university-blue mx-auto mb-3" />
            <h1 className="text-4xl md:text-5xl font-bold mb-3">Apply to AnimaVerse</h1>
            <p className="text-gray-600">Start your journey with us — it only takes a minute.</p>
          </div>

          {submitted ? (
            <div className="bg-white rounded-xl shadow-xl p-10 text-center animate-fade-in">
              <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-2">Thanks, {form.firstName}!</h2>
              <p className="text-gray-600 mb-6">Your application has been received. Our admissions team will email you within 3 business days.</p>
              <Link to="/"><Button className="bg-university-blue hover:bg-university-blue/90">Return Home</Button></Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-xl p-6 md:p-10 space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input id="firstName" name="firstName" value={form.firstName} onChange={handleChange} className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input id="lastName" name="lastName" value={form.lastName} onChange={handleChange} className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" name="email" type="email" value={form.email} onChange={handleChange} className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" name="phone" value={form.phone} onChange={handleChange} className="mt-1" />
                </div>
                <div>
                  <Label>Program of Interest *</Label>
                  <Select value={form.program} onValueChange={(v) => setForm({ ...form, program: v })}>
                    <SelectTrigger className="mt-1"><SelectValue placeholder="Select a program" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cs">Computer Science</SelectItem>
                      <SelectItem value="business">Business Administration</SelectItem>
                      <SelectItem value="engineering">Engineering</SelectItem>
                      <SelectItem value="arts">Arts & Humanities</SelectItem>
                      <SelectItem value="medicine">Medicine</SelectItem>
                      <SelectItem value="law">Law</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Start Term</Label>
                  <Select value={form.startTerm} onValueChange={(v) => setForm({ ...form, startTerm: v })}>
                    <SelectTrigger className="mt-1"><SelectValue placeholder="Select term" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="fall-2026">Fall 2026</SelectItem>
                      <SelectItem value="spring-2027">Spring 2027</SelectItem>
                      <SelectItem value="fall-2027">Fall 2027</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div>
                <Label htmlFor="message">Why do you want to join? (optional)</Label>
                <Textarea id="message" name="message" rows={4} value={form.message} onChange={handleChange} className="mt-1" />
              </div>
              <Button type="submit" size="lg" className="w-full bg-university-blue hover:bg-university-blue/90">
                Submit Application
              </Button>
            </form>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Apply;
