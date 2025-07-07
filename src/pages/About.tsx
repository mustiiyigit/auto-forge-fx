import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  const teamMembers = [
    {
      name: "Alex Chen",
      role: "AI Engineer",
      image: "/api/placeholder/150/150",
      bio: "Former Tesla AI researcher with 8+ years in computer vision and automotive technology."
    },
    {
      name: "Sarah Rodriguez",
      role: "Product Designer",
      image: "/api/placeholder/150/150",
      bio: "Car enthusiast and UX designer who combines automotive passion with cutting-edge design."
    },
    {
      name: "Marcus Kim",
      role: "Backend Developer",
      image: "/api/placeholder/150/150",
      bio: "Performance optimization expert ensuring lightning-fast AI processing for every user."
    },
    {
      name: "Elena Vasquez",
      role: "Marketing Lead",
      image: "/api/placeholder/150/150",
      bio: "Automotive industry veteran connecting SelfAuto with car communities worldwide."
    }
  ];

  const milestones = [
    { year: "2023", event: "SelfAuto founded by car enthusiasts", icon: "🚀" },
    { year: "2023", event: "First AI model trained on 100K+ car images", icon: "🧠" },
    { year: "2024", event: "Partnership with FLUX.1 for advanced AI", icon: "⚡" },
    { year: "2024", event: "10,000+ transformations completed", icon: "🎯" },
    { year: "2024", event: "Launch of Pro and Enterprise plans", icon: "💼" },
  ];

  return (
    <div className="min-h-screen bg-gradient-dark">
      <Navbar />
      
      <div className="pt-20 px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="font-cyber text-4xl md:text-6xl font-black neon-text mb-6">
              ABOUT <span className="text-secondary">SELFAUTO</span>
            </h1>
            <p className="font-tech text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Born from a passion for automotive excellence and cutting-edge AI technology, 
              SelfAuto transforms ordinary car photos into extraordinary visual masterpieces 
              that dominate social media and impress fellow enthusiasts.
            </p>
          </div>

          {/* Mission Section */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20 items-center">
            <div>
              <h2 className="font-cyber text-3xl text-primary mb-6">Our Mission</h2>
              <p className="font-tech text-lg text-muted-foreground mb-6">
                We believe every car has a story to tell, and every enthusiast deserves 
                professional-grade tools to showcase their passion. SelfAuto democratizes 
                high-end automotive photography, making it accessible to everyone.
              </p>
              <p className="font-tech text-lg text-muted-foreground mb-8">
                Our AI-powered platform eliminates the need for expensive photography 
                equipment and professional editing skills, letting you focus on what 
                matters most - your love for automobiles.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-primary/20 px-4 py-2 rounded-full border border-primary/30">
                  <span className="font-tech text-sm text-primary">🎯 Precision</span>
                </div>
                <div className="bg-secondary/20 px-4 py-2 rounded-full border border-secondary/30">
                  <span className="font-tech text-sm text-secondary">⚡ Speed</span>
                </div>
                <div className="bg-accent/20 px-4 py-2 rounded-full border border-accent/30">
                  <span className="font-tech text-sm text-accent">🚀 Innovation</span>
                </div>
              </div>
            </div>
            <div className="bg-muted/20 rounded-xl h-80 flex items-center justify-center">
              <p className="font-tech text-muted-foreground">Mission Visual Placeholder</p>
            </div>
          </div>

          {/* Technology Section */}
          <div className="mb-20">
            <h2 className="font-cyber text-3xl text-primary text-center mb-12">Cutting-Edge Technology</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-card/50 border-primary/30 tech-border p-8 text-center">
                <div className="text-4xl mb-4">🧠</div>
                <h3 className="font-cyber text-xl text-primary mb-4">FLUX.1 AI Engine</h3>
                <p className="font-tech text-muted-foreground">
                  Advanced neural networks trained on millions of automotive images 
                  for unparalleled accuracy and realism.
                </p>
              </Card>
              
              <Card className="bg-card/50 border-primary/30 tech-border p-8 text-center">
                <div className="text-4xl mb-4">☁️</div>
                <h3 className="font-cyber text-xl text-primary mb-4">Cloud Processing</h3>
                <p className="font-tech text-muted-foreground">
                  Distributed computing infrastructure ensures lightning-fast 
                  processing regardless of your device's capabilities.
                </p>
              </Card>
              
              <Card className="bg-card/50 border-primary/30 tech-border p-8 text-center">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="font-cyber text-xl text-primary mb-4">Privacy First</h3>
                <p className="font-tech text-muted-foreground">
                  Your images are processed securely and automatically deleted 
                  after transformation, ensuring complete privacy.
                </p>
              </Card>
            </div>
          </div>

          {/* Timeline */}
          <div className="mb-20">
            <h2 className="font-cyber text-3xl text-primary text-center mb-12">Our Journey</h2>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-cyber"></div>
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                      <Card className="bg-card/50 border-primary/30 tech-border p-6">
                        <div className="text-2xl mb-2">{milestone.icon}</div>
                        <div className="font-cyber text-secondary text-lg mb-2">{milestone.year}</div>
                        <p className="font-tech text-foreground">{milestone.event}</p>
                      </Card>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background glow-blue"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-20">
            <h2 className="font-cyber text-3xl text-primary text-center mb-12">Meet the Team</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="bg-card/50 border-primary/30 tech-border p-6 text-center hover:glow-blue transition-all duration-300">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-primary/50"
                  />
                  <h3 className="font-cyber text-lg text-primary mb-2">{member.name}</h3>
                  <p className="font-tech text-secondary text-sm mb-3">{member.role}</p>
                  <p className="font-tech text-xs text-muted-foreground">{member.bio}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid md:grid-cols-4 gap-6 mb-20">
            <div className="text-center">
              <div className="font-cyber text-4xl text-secondary mb-2">50K+</div>
              <p className="font-tech text-muted-foreground">Transformations</p>
            </div>
            <div className="text-center">
              <div className="font-cyber text-4xl text-secondary mb-2">10K+</div>
              <p className="font-tech text-muted-foreground">Happy Users</p>
            </div>
            <div className="text-center">
              <div className="font-cyber text-4xl text-secondary mb-2">99.9%</div>
              <p className="font-tech text-muted-foreground">Uptime</p>
            </div>
            <div className="text-center">
              <div className="font-cyber text-4xl text-secondary mb-2">24/7</div>
              <p className="font-tech text-muted-foreground">Support</p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-cyber/10 rounded-xl p-12 border border-primary/30">
            <h2 className="font-cyber text-3xl text-primary mb-6">Join the SelfAuto Community</h2>
            <p className="font-tech text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Be part of a growing community of automotive enthusiasts who are transforming 
              the way car photography is done. Start your journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cyber" size="lg" className="font-tech px-8">
                Start Free Trial
              </Button>
              <Button variant="ghost_cyber" size="lg" className="font-tech px-8">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default About;