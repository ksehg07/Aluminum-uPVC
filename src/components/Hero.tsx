import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Premium aluminum windows and doors" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/85" />
      </div>

      {/* Content */}
      <div className={`relative z-10 max-w-5xl mx-auto px-6 text-center transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
          Premium Aluminium & uPVC Solutions
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
          Transform your space with exceptional quality windows, doors, and wall sheets
        </p>
        <Button 
          onClick={scrollToContact}
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg shadow-medium hover:shadow-strong transition-all duration-300"
        >
          Get a Quote
        </Button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;