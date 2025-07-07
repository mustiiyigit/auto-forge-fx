import { Button } from "@/components/ui/button";
import heroCar from "@/assets/hero-car.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      {/* Hero Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: `url(${heroCar})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-background/90" />
      
      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto">
        {/* Brand Logo */}
        <div className="mb-8">
          <h1 className="font-cyber text-6xl md:text-8xl font-black neon-text mb-4 animate-neon-pulse">
            SELF<span className="text-secondary">AUTO</span>
          </h1>
          <div className="w-32 h-1 bg-gradient-cyber mx-auto rounded-full glow-blue" />
        </div>
        
        {/* Main Headline */}
        <h2 className="font-tech text-2xl md:text-4xl font-bold mb-6 text-foreground/90">
          Transform Your Ride.<br />
          <span className="text-primary">Impress the Streets.</span>
        </h2>
        
        {/* Subheadline */}
        <p className="font-tech text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
          AI-powered car photo transformation with cyberpunk aesthetics. 
          Change backgrounds, enhance quality, add logos, and make your ride look absolutely legendary.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            size="lg" 
            className="font-tech text-lg px-8 py-4 bg-gradient-cyber border-0 hover-glow-blue font-semibold transition-all duration-300 transform hover:scale-105"
          >
            START TRANSFORMING
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="font-tech text-lg px-8 py-4 border-primary/50 text-primary hover:bg-primary/10 hover-glow-blue transition-all duration-300"
          >
            VIEW GALLERY
          </Button>
        </div>
        
        {/* Feature Pills */}
        <div className="flex flex-wrap justify-center gap-4 mt-12">
          {["AI Background Change", "Logo Addition", "Quality Enhancement", "Plate Blur"].map((feature) => (
            <div 
              key={feature}
              className="px-4 py-2 bg-muted/20 border border-primary/30 rounded-full font-tech text-sm text-primary/90 hover-glow-blue transition-all duration-300 cursor-default"
            >
              {feature}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;