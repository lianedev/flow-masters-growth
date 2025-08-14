import React from 'react';
import { Button } from './ui/button';
import { Phone, Shield, Clock, Star, ArrowRight } from 'lucide-react';
import heroImage from '@/assets/hero-plumber.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20 md:pt-24">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
      </div>

      {/* Floating Elements - Hidden on mobile */}
      <div className="absolute top-20 right-20 w-20 h-20 bg-white/10 rounded-full animate-float hidden md:block" />
      <div className="absolute bottom-32 left-32 w-12 h-12 bg-accent/20 rounded-full animate-float hidden md:block" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 right-1/3 w-8 h-8 bg-secondary/30 rounded-full animate-float hidden lg:block" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          {/* Trust Badges */}
          <div className="flex flex-wrap items-center gap-2 md:gap-4 mb-4 md:mb-6">
            <div className="flex items-center gap-1 md:gap-2 glass px-2 md:px-3 py-1 rounded-full">
              <Shield className="w-3 h-3 md:w-4 md:h-4 text-white" />
              <span className="text-white  font-medium">Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-1 md:gap-2 glass px-2 md:px-3 py-1 rounded-full">
              <Star className="w-3 h-3 md:w-4 md:h-4 text-yellow-400 fill-current" />
              <span className="text-white  font-medium">4.9/5 Reviews</span>
            </div>
            <div className="flex items-center gap-1 md:gap-2 glass px-2 md:px-3 py-1 rounded-full">
              <Clock className="w-3 h-3 md:w-4 md:h-4 text-white" />
              <span className="text-white   font-medium">24/7 Emergency</span>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight animate-slide-up">
            Professional
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-accent-light to-secondary-light">
              Plumbing Services
            </span>
            <span className="block text-xl md:text-3xl lg:text-4xl font-medium">
              Serving Las Vegas region for 20 years
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-6 md:mb-8 max-w-2xl animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Fast, reliable, and affordable plumbing solutions for your home and business. 
            Available 24/7 for emergencies.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col gap-3 md:gap-4 mb-8 md:mb-12 animate-slide-up"
            style={{ animationDelay: '0.4s' }}>
              <a href="tel:+17027103972">
              <Button
              variant="hero"
              size="lg"
              type="button"
              className="group w-fit"
              aria-label="Call now"
            >
              <Phone className="w-4 h-4 md:w-5 md:h-5 group-hover:animate-bounce" />
              <span className=" md:text-base ml-2">Call Now:  (702) 710-3972</span>
            </Button>
            </a>
            
            <a href="tel:+17027103972">
              <Button
                variant="accent"
                size="lg"
                type="button"
                className="group w-fit"
                aria-label="Get free quote"
              >
                <span className=" md:text-base mr-2">Get Free Quote</span>
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>  
          </div>


          {/* Key Features */}
          <div
            className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-6 animate-slide-up w-fit mx-auto"
            style={{ animationDelay: '0.6s' }}>
            {/* Card 1 */}
            <div className="glass p-4 md:p-6 rounded-lg w-fit transition-transform hover:scale-[1.02]">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1  md:text-base">
                    Same Day Service
                  </h3>
                  <p className="text-white/80  leading-snug">
                    Most repairs completed the same day you call
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="glass p-4 md:p-6 rounded-lg w-fit transition-transform hover:scale-[1.02]">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1  md:text-base">
                    100% Guaranteed
                  </h3>
                  <p className="text-white/80   leading-snug">
                    All work backed by our satisfaction guarantee
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="glass p-4 md:p-6 rounded-lg w-fit transition-transform hover:scale-[1.02]">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-primary-light rounded-lg flex items-center justify-center flex-shrink-0">
                  <Star className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1 t md:text-base">
                    5-Star Rated
                  </h3>
                  <p className="text-white/80  leading-snug">
                    Trusted by 100+ satisfied customers
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      
      
    </section>
  );
};

export default Hero;