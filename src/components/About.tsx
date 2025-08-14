import React from 'react';
import { Button } from './ui/button';
import { 
  Shield, 
  Award, 
  Users, 
  Clock,
  CheckCircle,
  Wrench,
  Star,
  Phone
} from 'lucide-react';
import bathroomImage from '@/assets/bathroom-showcase.jpg';
import toolsImage from '@/assets/plumbing-tools.jpg';
import Contact from './Contact';

const About = () => {
  const teamMembers = [
    {
      name: 'Gerardo “Jerry” Salazar',
      role: 'President and owner',
      experience: '10+ years',
      description: 'Since co-founding the company in March 2013, Jerry has guided Adaven Plumbing with integrity, expertise, and a customer-first philosophy.'
    },
    {
      name: 'Other Staff',
      role: 'Staff',
      experience: '7+ years',
      description: 'network of certified partner technicians—each background-checked, extensively trained, and equipped with the latest tools and practices'
    }
    
  ];

  const certifications = [
    'Las Vegas License',
    'Backflow Prevention Certified',
    'Green Plumbing Certified',
    'OSHA Safety Trained'
  ];

  const achievements = [
    { icon: Users, number: '500+', label: 'Satisfied Customers' },
    { icon: Clock, number: '12+', label: 'Years in Business' },
    { icon: Star, number: '4.9/5', label: 'Customer Rating' },
    { icon: Award, number: '100%', label: 'Satisfaction Rate' }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            About Adaven Plumbing
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your trusted plumbing professionals serving Las Vegas for 20 years. 
            We're committed to providing fast, reliable, and affordable plumbing solutions.
          </p>
        </div>

        {/* Company Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-2xl font-semibold text-primary mb-6">
              Our Story & Mission
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
              Adaven Plumbing is a small but fast growing local residential and commercial family owned company that has over 15 years experience in the plumbing industry. We continually stay current in all that the plumbing industry has to offer including all code changes and updates, new product services, warranties and procedures along with staying connected with state and local code enforcement.
              </p>
              <p>
                Our goal is to assure that you are always receiving the best products and service along with current code updates.
                With times and technology changing so rapidly, our industry is always improving to insure that your indoor plumbing continues to offer a safe and efficient way to obtain portable  and safe drinking water.  Along with staying up-to-date on current technology and techniques, we offer honest and affordable plumbing services with flat-rate pricing, giving you peace of mind before your repair or replacement  job is started
              </p>
              <p>
                So, feel confident that you are making the right choice by allowing us to be your first choice in plumbing! 
              </p>
              
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a href="tel:+17027103972">
                <Button variant="accent" size="lg">
                  <Phone className="w-5 h-5" />
                  Call (702) 710-3972
                </Button>
              </a> 

              <a href="#contact"> 
                <Button variant="outline" size="lg">
                  Get Free Estimate
                </Button>
              </a>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="/90.jpg" alt="Adaven Plumbing" 
              
              className="rounded-xl shadow-large w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-xl" />
          </div>
        </div>

        {/* Achievements */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">
                  {achievement.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {achievement.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Why Choose Us */}
        <div className="bg-muted p-8 md:p-12 rounded-xl mb-20">
          <h3 className="text-2xl font-semibold text-primary mb-8 text-center">
            Why Choose FlowMasters?
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-2">Licensed & Insured</h4>
                <p className="text-muted-foreground text-sm">
                  Fully licensed master plumbers with comprehensive insurance coverage for your peace of mind.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-2">24/7 Emergency Service</h4>
                <p className="text-muted-foreground text-sm">
                  Plumbing emergencies don't wait. Neither do we. Available around the clock for urgent repairs.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-primary-light rounded-lg flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-2">100% Guarantee</h4>
                <p className="text-muted-foreground text-sm">
                  We stand behind our work with a complete satisfaction guarantee on all services.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                <Star className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-2">Top-Rated Service</h4>
                <p className="text-muted-foreground text-sm">
                  4.9/5 star rating from 500+ customers who trust us with their plumbing needs.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                <Wrench className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-2">Professional Equipment</h4>
                <p className="text-muted-foreground text-sm">
                  State-of-the-art tools and technology for accurate diagnosis and efficient repairs.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-primary-light rounded-lg flex items-center justify-center flex-shrink-0">
                <Award className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-2">Upfront Pricing</h4>
                <p className="text-muted-foreground text-sm">
                  No hidden fees or surprise charges. You'll know the cost before we start any work.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <img 
              src="/team.jpg" 
              alt="Professional plumbing tools and equipment"
              className="rounded-xl shadow-large w-full"
            />
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-primary mb-6">
              Meet Our Expert Team
            </h3>
            <p className="text-muted-foreground mb-8">
              Our team of licensed, experienced plumbers is dedicated to providing 
              the highest quality service to every customer.
            </p>
            
            <div className="space-y-6">
              {teamMembers.map((member, index) => (
                <div key={index} className="border-l-4 border-accent pl-4">
                  <h4 className="font-semibold text-primary">{member.name}</h4>
                  <p className="text-secondary font-medium text-sm">{member.role}</p>
                  <p className="text-accent text-sm">{member.experience}</p>
                  <p className="text-muted-foreground  mt-1">{member.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="bg-gradient-primary text-white p-8 rounded-xl text-center">
          <h3 className="text-2xl font-semibold mb-6">
            Licensed & Certified Professionals
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center gap-2 justify-center md:justify-start">
                <CheckCircle className="w-4 h-4 text-accent" />
                <span className="">{cert}</span>
              </div>
            ))}
          </div>
          <p className="opacity-90 mb-6">
            Fully Licensed | Fully Bonded & Insured
          </p>
          <a href="#contact">
            <Button variant="accent" size="lg" onClick={Contact}>
              Contact Our Team Today
            </Button>
          </a>  
        </div>
      </div>
    </section>
  );
};

export default About;