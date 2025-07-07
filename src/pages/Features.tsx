import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Features = () => {
  const features = [
    {
      icon: "🎨",
      title: "AI Background Transformation",
      description: "Replace your car's background with stunning environments like Tokyo streets, luxury showrooms, or futuristic battlefields.",
      benefits: ["60+ preset backgrounds", "Custom environment generation", "Perfect lighting adjustment", "Seamless integration"]
    },
    {
      icon: "⚡",
      title: "Quality Enhancement",
      description: "Boost your car photos to professional-grade quality with our advanced AI upscaling technology.",
      benefits: ["4K resolution upscaling", "Noise reduction", "Color correction", "Detail sharpening"]
    },
    {
      icon: "🏷️",
      title: "Smart Logo Addition",
      description: "Add brand logos, custom decals, or sponsor stickers with perfect placement and realistic integration.",
      benefits: ["Auto-perspective correction", "Brand logo library", "Custom logo upload", "Realistic application"]
    },
    {
      icon: "🔒",
      title: "Privacy Protection",
      description: "Automatically blur license plates and sensitive information while maintaining photo quality.",
      benefits: ["Automatic plate detection", "Smart blur application", "Privacy compliance", "Original quality preserved"]
    },
    {
      icon: "🎯",
      title: "Precision Control",
      description: "Fine-tune every aspect of your transformation with advanced AI parameter controls.",
      benefits: ["Aggressiveness slider", "Realism adjustment", "Creativity control", "Style intensity"]
    },
    {
      icon: "⚡",
      title: "Lightning Fast Processing",
      description: "Get professional results in seconds with our optimized FLUX.1 AI processing pipeline.",
      benefits: ["Sub-10 second processing", "Batch processing", "Real-time preview", "Queue management"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-dark">
      <Navbar />
      
      <div className="pt-20 px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="font-cyber text-4xl md:text-6xl font-black neon-text mb-6">
              POWERFUL <span className="text-secondary">FEATURES</span>
            </h1>
            <p className="font-tech text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover the cutting-edge AI capabilities that make SelfAuto the ultimate 
              car photo transformation platform for automotive enthusiasts.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="bg-card/50 border-primary/30 tech-border hover:glow-blue transition-all duration-300 hover:scale-105"
              >
                <div className="p-8">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="font-cyber text-xl text-primary mb-4">{feature.title}</h3>
                  <p className="font-tech text-muted-foreground mb-6">{feature.description}</p>
                  
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="font-tech text-sm text-foreground/80 flex items-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3 glow-blue"></span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>

          {/* Demo Section */}
          <div className="bg-card/30 rounded-xl border border-primary/30 tech-border p-8 mb-16">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="font-cyber text-3xl text-primary mb-6">See It In Action</h2>
                <p className="font-tech text-lg text-muted-foreground mb-6">
                  Watch how our AI transforms ordinary car photos into extraordinary masterpieces 
                  that dominate social media and impress fellow enthusiasts.
                </p>
                <Button variant="cyber" size="lg" className="font-tech">
                  Watch Demo Video
                </Button>
              </div>
              <div className="bg-muted/20 rounded-lg h-64 flex items-center justify-center">
                <p className="font-tech text-muted-foreground">Demo Video Placeholder</p>
              </div>
            </div>
          </div>

          {/* Technical Specs */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-card/50 border-primary/30 tech-border text-center p-8">
              <div className="text-3xl font-cyber text-secondary mb-4">99.9%</div>
              <h3 className="font-tech text-lg text-primary mb-2">Accuracy Rate</h3>
              <p className="font-tech text-sm text-muted-foreground">
                Advanced AI ensures perfect results every time
              </p>
            </Card>
            
            <Card className="bg-card/50 border-primary/30 tech-border text-center p-8">
              <div className="text-3xl font-cyber text-secondary mb-4">&lt;10s</div>
              <h3 className="font-tech text-lg text-primary mb-2">Processing Time</h3>
              <p className="font-tech text-sm text-muted-foreground">
                Lightning-fast transformations for instant results
              </p>
            </Card>
            
            <Card className="bg-card/50 border-primary/30 tech-border text-center p-8">
              <div className="text-3xl font-cyber text-secondary mb-4">4K+</div>
              <h3 className="font-tech text-lg text-primary mb-2">Resolution</h3>
              <p className="font-tech text-sm text-muted-foreground">
                Ultra-high quality output for professional use
              </p>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="font-cyber text-3xl text-primary mb-6">Ready to Transform Your Ride?</h2>
            <p className="font-tech text-lg text-muted-foreground mb-8">
              Join thousands of car enthusiasts who trust SelfAuto for their photo transformations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cyber" size="lg" className="font-tech px-8">
                Start Free Trial
              </Button>
              <Button variant="ghost_cyber" size="lg" className="font-tech px-8">
                View Pricing
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Features;