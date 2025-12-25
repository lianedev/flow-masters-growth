import React from 'react';
import { Button } from './ui/button';
import { 
  Wrench, 
  Droplets, 
  Thermometer, 
  Zap, 
  Home, 
  Building,
  Clock,
  Shield,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Droplets,
      title: 'Leak Detection & Repair',
      description: 'Advanced leak detection technology to find and fix leaks quickly',
      features: ['Hidden leak detection', 'Pipe repair', 'Water damage prevention'],
      price: 'Starting at $129',
      emergency: true
    },
    {
      icon: Wrench,
      title: 'Drain Cleaning',
      description: 'Professional drain cleaning for kitchen, bathroom, and main lines',
      features: ['Hydro-jetting', 'Snake services', 'Video inspection'],
      price: 'Starting at $99',
      emergency: true
    },
    {
      icon: Thermometer,
      title: 'Water Heater Services',
      description: 'Installation, repair, and maintenance of all water heater types',
      features: ['Tank & tankless', 'Gas & electric', 'Energy efficient'],
      price: 'Starting at $179',
      emergency: false
    },
    {
      icon: Home,
      title: 'Bathroom Remodeling',
      description: 'Complete bathroom renovation with modern plumbing fixtures',
      features: ['Full remodel', 'Fixture installation', 'Modern design'],
      price: 'Custom quote',
      emergency: false
    },
    {
      icon: Zap,
      title: 'Emergency Repairs',
      description: '24/7 emergency plumbing services for urgent issues',
      features: ['Burst pipes', 'No hot water', 'Severe clogs'],
      price: 'Starting at $159',
      emergency: true
    },
    {
      icon: Building,
      title: 'Commercial Plumbing',
      description: 'Professional plumbing services for businesses and properties',
      features: ['Office buildings', 'Restaurants', 'Property management'],
      price: 'Custom quote',
      emergency: true
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-6">
            Our Plumbing Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From emergency repairs to complete installations, we provide comprehensive 
            plumbing solutions for residential and commercial properties.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                className="group bg-white rounded-xl p-6 shadow-soft hover:shadow-large transition-all duration-300 hover:-translate-y-2"
              >
                {/* Service Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  {service.emergency && (
                    <span className="bg-destructive text-destructive-foreground text-sm px-2 py-1 rounded-full font-medium">
                      24/7
                    </span>
                  )}
                </div>

                {/* Service Content */}
                <h3 className="text-xl font-semibold text-primary mb-3 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-base text-muted-foreground mb-4">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-base">
                      <CheckCircle className="w-4 h-4 text-accent" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Pricing & CTA */}
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-primary">
                    {service.price}
                  </span>
                  <a href="#contact">
                    <Button variant="outline" size="sm" className="group/btn">
                      Learn More
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </a> 
                </div>
              </div>
            );
          })}
        </div>

        {/* Service Areas */}
        <div className="bg-white rounded-xl p-8 shadow-soft">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-4">
                Service Areas (City) region
              </h3>
              <p className="text-base text-muted-foreground mb-6">
                We proudly serve Houston and surrounding areas with fast, reliable plumbing services.
              </p>
              <div className="grid grid-cols-2 gap-4 text-base">
                <div className="space-y-2">
                  <p>• Area</p>
                  <p>• Area</p>
                  <p>• Area</p>
                  <p>• Area</p>
                </div>
                <div className="space-y-2">
                  <p>• Area</p>
                  <p>• Area</p>
                  <p>• Area</p>
                  <p>• Area</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4 p-4 bg-muted rounded-lg">
                <Clock className="w-8 h-8 text-accent" />
                <div>
                  <h4 className="text-lg font-semibold">Response Time</h4>
                  <p className="text-base text-muted-foreground">30 minutes or less</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-muted rounded-lg">
                <Shield className="w-8 h-8 text-secondary" />
                <div>
                  <h4 className="text-lg font-semibold">Licensed & Insured</h4>
                  <p className="text-base text-muted-foreground"> (license)</p>
                </div>
              </div>
              <a href="tel:+17027103972">
                <Button variant="accent" size="lg" className="w-full">
                  Get Service Quote
                </Button>
              </a> 
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
