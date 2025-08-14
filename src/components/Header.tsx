import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Phone, Menu, X, Wrench, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Emergency Top Bar */}
      <div className="bg-destructive text-destructive-foreground py-2 text-center font-bold text-sm sm:text-base">
        <div className="container mx-auto px-4 flex items-center justify-center gap-2">
          <Clock className="w-4 h-4" />
          <span>24/7 Emergency Service Available</span>
          <Phone className="w-4 h-4" />
          <a href="tel:+17027103972" className="font-bold hover:underline">
             (702) 710-3972 
          </a>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={cn(
          'fixed top-[32px] md:top-[40px] left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-primary backdrop-blur-md shadow-md'
            : 'bg-transparent'
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className=" md:w-11 md:h-11 bg-white rounded-lg flex items-center justify-center">
                <img className='object-contain w-full h-full' src='/logo.webp'/>
              </div>
              <div>
                <h1 className="text-lg md:text-xl font-bold text-white">Adaven Plumbing</h1>
                <p className="text-xs sm:text-sm text-muted-foreground hidden sm:block">
                  Las Vegas
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-base text-white hover:text-gray-300 transition font-medium"
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <div className="text-right">
                <p className="text-white">Call Now</p>
                <a
                  href="tel:+17027103972"
                  className="font-bold text-muted-foreground"
                >
                 (702) 710-3972
                </a>
              </div>
              <a href="tel:+1707103972">
              <Button variant="accent" size="lg">
                Get Free Quote
              </Button>
              </a>
              
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-3 text-white hover:text-primary focus:outline-none  rounded-md"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? (
                <X className="w-7 h-7" />
              ) : (
                <Menu className="w-7 h-7" />
              )}
            </button>

          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-md border-t shadow-md">
            <nav className="container mx-auto px-4 py-6 space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block   text-foreground hover:text-primary transition"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-6 border-t space-y-4">
                <a
                  href="tel:+17027103972"
                  className="block  text-primary font-semibold"
                >
                  Emergency: (702) 710 3972
                </a>
                <Button
                  variant="accent"
                  size="lg"
                  className="w-full text-base py-3"
                >
                  Get Free Quote
                </Button>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
