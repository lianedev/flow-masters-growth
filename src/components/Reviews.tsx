import React from 'react';
import { Star, Quote, MapPin, Calendar } from 'lucide-react';

const Reviews = () => {
  const reviews = [
    {
      name: 'Sarah Johnson',
      location: 'Sloan',
      date: '2 days ago',
      rating: 5,
      text: 'Adaven plumbing saved the day! Had a burst pipe at 2 AM and they were at my house within 30 minutes. Professional, clean work, and fair pricing. Highly recommend!',
      service: 'Emergency Pipe Repair'
    },
    {
      name: 'Mike Rodriguez',
      location: 'Enterprise',
      date: '1 week ago',
      rating: 5,
      text: 'Excellent service for our bathroom remodel. The team was professional, on time, and the quality of work exceeded our expectations. Our new bathroom looks amazing!',
      service: 'Bathroom Remodeling'
    },
    {
      name: 'Jennifer Chen',
      location: 'Summerlin',
      date: '2 weeks ago',
      rating: 5,
      text: 'Called Adaven plumbing for a water heater installation. They provided multiple options, explained everything clearly, and completed the job efficiently. Great customer service!',
      service: 'Water Heater Installation'
    },
    {
      name: 'David Thompson',
      location: 'Winchester',
      date: '3 weeks ago',
      rating: 5,
      text: 'Had persistent drain issues that other plumbers could not solve. Adaven plumbing used their video inspection technology and fixed the problem permanently. Worth every penny!',
      service: 'Drain Cleaning'
    },
    {
      name: 'Lisa Martinez',
      location: 'Henderson',
      date: '1 month ago',
      rating: 5,
      text: 'Professional team that arrived on time and completed the leak detection service quickly. Found a hidden leak that could have caused major damage. Thank you FlowMasters!',
      service: 'Leak Detection'
    },
    {
      name: 'Robert Kim',
      location: 'Anthem',
      date: '1 month ago',
      rating: 5,
      text: 'Needed commercial plumbing work for our restaurant. FlowMasters worked around our schedule and ensured minimal disruption to our business. Highly professional!',
      service: 'Commercial Plumbing'
    }
  ];

  const stats = [
    { number: '500+', label: 'Happy Customers' },
    { number: '4.9/5', label: 'Average Rating' },
    { number: '24/7', label: 'Emergency Service' },
    { number: '12+', label: 'Years Experience' }
  ];

  return (
    <section id="reviews" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 md:mb-6">
            What Our Customers Say
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. See what our satisfied customers 
            have to say about our plumbing services.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-12 md:mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-1 md:mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground font-medium text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {reviews.map((review, index) => (
            <div 
              key={index}
              className="bg-white p-4 md:p-6 rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 border border-border"
            >
              {/* Review Header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className="font-semibold text-foreground">{review.name}</h4>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                    <MapPin className="w-3 h-3" />
                    <span>{review.location}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Calendar className="w-3 h-3" />
                  <span>{review.date}</span>
                </div>
              </div>

              {/* Star Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Service Badge */}
              <div className="inline-block bg-primary/10 text-primary text-xs px-2 py-1 rounded-full mb-4">
                {review.service}
              </div>

              {/* Review Text */}
              <div className="relative">
                <Quote className="absolute -top-2 -left-2 w-8 h-8 text-primary/20" />
                <p className="text-muted-foreground leading-relaxed pl-4">
                  {review.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews CTA */}
        <div className="text-center bg-gradient-primary p-8 rounded-xl text-white">
          <h3 className="text-2xl font-semibold mb-4">
            See More Reviews on Google
          </h3>
          <p className="mb-6 opacity-90">
            Check out our complete collection of customer reviews and ratings
          </p>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="text-xl font-semibold">4.9/5</span>
            <span className="opacity-80">(30+ Reviews)</span>
          </div>
          <a 
            href="https://share.google/ByihW57PuKldyeLIb" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-white/90  hover:scale-105 transition-transform duration-300"
          >
            View Google Reviews
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;