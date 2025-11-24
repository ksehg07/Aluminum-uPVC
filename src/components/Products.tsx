import { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DoorClosed, Frame, Grid3x3, Layers } from "lucide-react";

const products = [
  {
    icon: Frame,
    title: "Aluminium Windows",
    description: "Durable, energy-efficient windows with sleek modern designs that enhance any architectural style."
  },
  {
    icon: DoorClosed,
    title: "Aluminium Doors",
    description: "Premium quality doors offering superior security, insulation, and timeless elegance."
  },
  {
    icon: Grid3x3,
    title: "Door Handles",
    description: "Sophisticated aluminium handles that combine functionality with refined aesthetics."
  },
  {
    icon: Layers,
    title: "uPVC Wall Sheets",
    description: "High-quality wall cladding solutions providing durability and easy maintenance."
  }
];

const Products = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="products" 
      className="py-24 px-6 bg-background"
    >
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Products
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our comprehensive range of premium aluminium and uPVC solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <Card 
              key={index}
              className={`bg-card border-border hover:shadow-medium transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <product.icon className="w-8 h-8 text-accent" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">
                  {product.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground text-center leading-relaxed">
                  {product.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;