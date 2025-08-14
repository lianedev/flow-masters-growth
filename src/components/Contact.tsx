import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Calendar,
  Wrench,
  CheckCircle,
  Send
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    urgency: '',
    message: '',
    preferredTime: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const services = [
    'Emergency Repair',
    'Leak Detection',
    'Drain Cleaning',
    'Water Heater Service',
    'Bathroom Remodel',
    'Commercial Plumbing',
    'General Maintenance',
    'Other'
  ];

  const urgencyLevels = [
    'Emergency (ASAP)',
    'Same Day',
    'Within 2-3 Days',
    'Within a Week',
    'Not Urgent'
  ];

  return (
    <section id="contact" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 md:mb-6">
            Get Your Free Quote
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Contact us today for fast, reliable plumbing services. 
            We'll provide a free estimate and can often complete repairs the same day.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-xl p-6 md:p-8 shadow-soft">
            <h3 className="text-xl md:text-2xl font-semibold text-primary mb-4 md:mb-6">
              Request Service Quote
            </h3>
            
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6"
                >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block ">
                      Full Name *
                    </label>
                    <Input 
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Your full name"
                      required
                      className=" border-gray-300  "
                    
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block ">
                      Phone Number *
                    </label>
                    <Input 
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="(702) 710-3972"
                      required
                      className=" border-gray-300  "
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Email Address *
                  </label>
                  <Input 
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="your.email@example.com"
                    required
                    className=" border-gray-300  "
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Service Needed *
                    </label>
                    <Select onValueChange={(value) => handleInputChange('service', value)}>
                      <SelectTrigger className="border border-gray-300 text-sm placeholder-gray-400">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service} value={service}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Urgency Level *
                    </label>
                    <Select onValueChange={(value) => handleInputChange('urgency', value)}>
                      <SelectTrigger className="border border-gray-300 text-sm placeholder-gray-400">
                        <SelectValue placeholder="How urgent?"  />
                      </SelectTrigger>
                      <SelectContent className=" border-gray-300  ">
                        {urgencyLevels.map((level) => (
                          <SelectItem key={level} value={level}>
                            {level}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Problem Description *
                  </label>
                  <Textarea 
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="Please describe the plumbing issue in detail..."
                    rows={4}
                    required
                    className=" border-gray-300  "
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Preferred Contact Time
                  </label>
                  <Input 
                    value={formData.preferredTime}
                    onChange={(e) => handleInputChange('preferredTime', e.target.value)}
                    placeholder="Best time to reach you"
                    className=" border-gray-300  "
                  />
                </div>

                <Button type="submit" variant="accent" size="lg" className="w-full">
                  <Send className="w-5 h-5" />
                  Get Free Quote
                </Button>
              </form>
            ) : (
              <div className="text-center py-8">
                <CheckCircle className="w-16 h-16 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-2">
                  Quote Request Submitted!
                </h3>
                <p className="text-muted-foreground">
                  We'll contact you within 15 minutes to discuss your plumbing needs.
                </p>
              </div>
            )}
          </div>

          {/* Contact Information */}
          <div className="space-y-6 md:space-y-8">
            {/* Emergency Contact */}
            <div className="bg-destructive text-destructive-foreground p-4 md:p-6 rounded-xl">
              <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 flex items-center gap-2">
                <Phone className="w-4 h-4 md:w-5 md:h-5" />
                Emergency Service
              </h3>
              <p className="mb-4 opacity-90">
                Need immediate help? Call our 24/7 emergency hotline:
              </p>
              <a 
                href="tel:+17027103972" 
                className="text-2xl font-bold hover:underline block mb-2"
              >
                 (702) 710-3972
              </a>
              <p className="text-sm opacity-80">
                Available 24/7 for plumbing emergencies
              </p>
            </div>

            {/* Contact Details */}
            <div className="bg-white p-6 rounded-xl shadow-soft space-y-6">
              <h3 className="text-xl font-semibold text-primary">
                Contact Information
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-accent" />
                  <div>

                    <p className="font-medium">Business Phone</p>
                    <a href="tel:+17027103972" className="text-primary hover:underline">
                      (702) 710-3972
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-accent" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:info@adavenplmbing.com" className="text-primary hover:underline">
                       info@adavenplumbing.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-accent" />
                  <div>
                    <p className="font-medium">Service Area</p>
                    <p className="text-muted-foreground">Las Vegas & Surrounding Areas</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-accent" />
                  <div>
                    <p className="font-medium">Business Hours</p>
                    <p className="text-muted-foreground">
                      Mon-Fri: 7AM-7PM<br />
                      Sat-Sun: 8AM-5PM<br />
                      Emergency: 24/7
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Facts */}
            <div className="bg-gradient-primary text-white p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">Why Choose Adaven plumbing</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  Licensed & Insured 
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  Same-day service available
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  100% satisfaction guarantee
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  Upfront, honest pricing
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  12+ years serving Las vegas
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;