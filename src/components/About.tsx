import { useEffect, useRef, useState } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="py-24 px-6 bg-card"
    >
      <div className={`max-w-4xl mx-auto transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-6">
          About Us
        </h2>
        <div className="w-20 h-1 bg-accent mx-auto mb-12" />
        
        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            We specialize in providing premium quality aluminium and uPVC products that combine 
            exceptional durability with elegant design. Our commitment to excellence has made us 
            a trusted name in the industry.
          </p>
          <p>
            With years of experience and a dedication to customer satisfaction, we deliver 
            solutions that enhance both the aesthetic appeal and functionality of your spaces. 
            Every product is carefully selected to meet the highest standards of quality.
          </p>
          <p>
            Our team of experts works closely with clients to understand their unique needs and 
            provide tailored solutions that exceed expectations. From consultation to installation, 
            we ensure a seamless experience.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;