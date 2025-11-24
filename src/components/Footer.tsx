const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm md:text-base opacity-90">
          © {new Date().getFullYear()} Premium Solutions. All rights reserved.
        </p>
        <p className="text-xs md:text-sm opacity-75 mt-2">
          Quality Aluminium Windows, Doors & uPVC Solutions
        </p>
      </div>
    </footer>
  );
};

export default Footer;