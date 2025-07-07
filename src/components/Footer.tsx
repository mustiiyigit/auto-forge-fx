import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-dark border-t border-primary/20 py-16 px-4">
      {/* Background Grid */}
      <div className="absolute inset-0 grid-overlay opacity-20" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h4 className="font-cyber text-2xl font-bold text-primary neon-text mb-4">
              SELF<span className="text-secondary">AUTO</span>
            </h4>
            <p className="font-tech text-muted-foreground mb-6 leading-relaxed">
              The ultimate AI-powered car photo transformation platform. 
              Built by car enthusiasts, for car enthusiasts.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              {[
                { name: "Instagram", icon: "📱" },
                { name: "Twitter", icon: "🐦" },
                { name: "YouTube", icon: "📺" },
                { name: "Discord", icon: "💬" }
              ].map((social) => (
                <Button
                  key={social.name}
                  variant="ghost_cyber"
                  size="icon"
                  className="hover-glow-blue"
                >
                  <span className="text-lg">{social.icon}</span>
                </Button>
              ))}
            </div>
          </div>
          
          {/* Features */}
          <div>
            <h5 className="font-cyber text-lg font-bold text-foreground mb-4">FEATURES</h5>
            <ul className="font-tech text-sm space-y-2 text-muted-foreground">
              <li className="hover:text-primary transition-colors cursor-pointer">Background Change</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Logo Addition</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Quality Enhancement</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Plate Blur</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Smart Cropping</li>
            </ul>
          </div>
          
          {/* Community */}
          <div>
            <h5 className="font-cyber text-lg font-bold text-foreground mb-4">COMMUNITY</h5>
            <ul className="font-tech text-sm space-y-2 text-muted-foreground">
              <li className="hover:text-secondary transition-colors cursor-pointer">Gallery</li>
              <li className="hover:text-secondary transition-colors cursor-pointer">Forums</li>
              <li className="hover:text-secondary transition-colors cursor-pointer">Tutorials</li>
              <li className="hover:text-secondary transition-colors cursor-pointer">Challenges</li>
              <li className="hover:text-secondary transition-colors cursor-pointer">Leaderboards</li>
            </ul>
          </div>
        </div>
        
        {/* Newsletter Signup */}
        <div className="bg-card/20 border border-primary/20 rounded-lg p-8 mb-8 tech-border">
          <div className="text-center">
            <h5 className="font-cyber text-xl font-bold text-primary mb-2 neon-text">
              STAY IN THE FAST LANE
            </h5>
            <p className="font-tech text-muted-foreground mb-6">
              Get the latest updates, new features, and exclusive car transformation tips
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-background/50 border border-primary/30 rounded-md font-tech text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:glow-blue transition-all duration-300"
              />
              <Button className="bg-gradient-cyber hover-glow-blue font-tech font-semibold px-6">
                SUBSCRIBE
              </Button>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-muted/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="font-tech text-sm text-muted-foreground">
              © 2024 SelfAuto. All rights reserved. Built with 🔥 for car enthusiasts.
            </div>
            
            <div className="flex gap-6 font-tech text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                API Docs
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-32 h-1 bg-gradient-cyber" />
      <div className="absolute bottom-0 right-0 w-32 h-1 bg-gradient-neon" />
    </footer>
  );
};

export default Footer;