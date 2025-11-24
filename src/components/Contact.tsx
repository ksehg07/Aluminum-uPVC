import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle2 } from "lucide-react";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    message: ""
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.phone || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate API call (replace with actual backend when ready)
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      
      toast({
        title: "Success!",
        description: "Your inquiry has been submitted. We'll contact you soon.",
      });

      // Reset form
      setFormData({
        name: "",
        phone: "",
        address: "",
        message: ""
      });

      // Hide success animation after 3 seconds
      setTimeout(() => setShowSuccess(false), 3000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section 
      ref={sectionRef}
      id="contact" 
      className="py-24 px-6 bg-background relative"
    >
      <div className="max-w-3xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get in Touch
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6" />
          <p className="text-lg text-muted-foreground">
            Ready to transform your space? Contact us for a personalized quote
          </p>
        </div>

        {showSuccess && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-background/80 backdrop-blur-sm animate-fade-in">
            <div className="bg-card p-8 rounded-lg shadow-strong animate-scale-in">
              <CheckCircle2 className="w-20 h-20 text-accent mx-auto mb-4" />
              <p className="text-2xl font-semibold text-foreground text-center">
                Message Sent Successfully!
              </p>
            </div>
          </div>
        )}

        <form 
          onSubmit={handleSubmit}
          className={`space-y-6 bg-card p-8 rounded-lg shadow-medium transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div>
            <Label htmlFor="name" className="text-foreground">
              Name <span className="text-destructive">*</span>
            </Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your full name"
              className="mt-2 bg-background border-border focus:border-accent"
              required
            />
          </div>

          <div>
            <Label htmlFor="phone" className="text-foreground">
              Phone Number <span className="text-destructive">*</span>
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your contact number"
              className="mt-2 bg-background border-border focus:border-accent"
              required
            />
          </div>

          <div>
            <Label htmlFor="address" className="text-foreground">
              Address
            </Label>
            <Input
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Your address (optional)"
              className="mt-2 bg-background border-border focus:border-accent"
            />
          </div>

          <div>
            <Label htmlFor="message" className="text-foreground">
              Inquiry Message <span className="text-destructive">*</span>
            </Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your project or inquiry"
              className="mt-2 bg-background border-border focus:border-accent min-h-[150px]"
              required
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-lg shadow-medium hover:shadow-strong transition-all duration-300"
          >
            {isSubmitting ? "Sending..." : "Submit Inquiry"}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;