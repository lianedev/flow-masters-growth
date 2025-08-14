import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYelp } from '@fortawesome/free-brands-svg-icons';
import { Button } from './ui/button';
import { 
  Wrench, 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Star,
  Shield
} from 'lucide-react';
import Terms from './Terms';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    'Emergency Repairs',
    'Leak Detection',
    'Drain Cleaning',
    'Water Heater Service',
    'Bathroom Remodeling',
    'Commercial Plumbing'
  ];

  const serviceAreas = [
    'Henderson',
    'Spring Valley',
    'Enterprise',
    'Summerlin',
    'Winchester',
    'Sloan'
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <img className='object-contain w-full h-full' src='/logo.webp'/>
              </div>
              <div>
                <h3 className="text-xl font-bold">Adaven plumbing</h3>
                <p className="text-sm opacity-80">Las Vegas</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Serving Las Vegas area with professional plumbing services since 2013. 
              Licensed, insured, and committed to customer satisfaction.
            </p>
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-4 h-4" />
              <span className="text-sm">Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="text-sm">4.9/5 Rating (500+ Reviews)</span>
            </div>
          </div>

          

          {/* Service Areas */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Service Areas</h4>
            <ul className="space-y-3">
              {serviceAreas.map((area, index) => (
                <li key={index}>
                  <span className="text-primary-foreground/80 text-sm">
                    {area}
                  </span>
                </li>
              ))}
            </ul>
          
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4" />
                <div>
                  <p className="text-sm font-medium">24/7 Emergency</p>
                  <a href="tel:+17027103972 " className="text-yellow-400 hover:underline">
                     (702) 710-3972
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4" />
                <div>
                  <p className="text-sm font-medium">Email</p>
                  <a href="mailto:info@adavenplumbing.com" className="text-primary-foreground/80 hover:text-white text-sm">
                    info@adavenplumbing.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4" />
                <div>
                  <p className="text-sm font-medium">Service Area</p>
                  <p className="text-primary-foreground/80 text-sm">Las Vegas Areas</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4" />
                <div>
                  <p className="text-sm font-medium">Hours</p>
                  <p className="text-primary-foreground/80 text-sm">
                    Mon-Fri: 7AM-7PM<br />
                    Emergency: 24/7
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 mt-12 text-center">
          <h3 className="text-2xl font-semibold mb-4">
            Need Plumbing Help Right Now?
          </h3>
          <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
            Don't wait for a small problem to become a big one. 
            Get professional plumbing service today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+17027103972">
              <Button variant="accent" size="lg">
                <Phone className="w-5 h-5" />
                (702) 710-3972

              </Button>
            </a>
            <a href="#contact">
              <Button variant="outline" size="lg" className="text-primary  border-white hover:bg-[#beb9b9] hover:text-primary">
                Get Free Quote
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-primary-foreground/60">
              © {currentYear} Adaven plumbing. All rights reserved. 
            </div>
            
            <div className="flex items-center gap-6">
              {/* Social Links */}
              <div className="flex items-center gap-2.5 mr-6">
                <p className='text-primary-foreground/60 text-sm font-semibold'> Socials</p>
                <a href="https://www.facebook.com/adavenplumbinginc/" className="text-primary-foreground/60 hover:text-white transition-colors">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="https://www.yelp.com/biz/adaven-plumbing-inc-las-vegas" className="text-primary-foreground/60 hover:text-white transition-colors">
                  <FontAwesomeIcon icon={faYelp}className=''/>
                </a>
                
              </div>
              
              {/* Legal Links
              
              <div className="flex items-center gap-4 text-sm">
                <a href="#" className="text-primary-foreground/60 hover:text-white transition-colors">
                  Privacy Policy
                </a>
                <a href="#terms" className="text-primary-foreground/60 hover:text-white transition-colors">
                  Terms of Service
                </a>
              </div>
              
              */}
              

              
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;