import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  color: 'blue' | 'purple' | 'red';
}

const FeatureCard = ({ icon, title, description, color }: FeatureCardProps) => {
  const glowClass = {
    blue: 'hover-glow-blue',
    purple: 'hover-glow-purple', 
    red: 'hover-glow-red'
  }[color];

  const borderClass = {
    blue: 'border-primary/30',
    purple: 'border-secondary/30',
    red: 'border-accent/30'
  }[color];

  return (
    <Card className={`bg-card/50 ${borderClass} tech-border ${glowClass} transition-all duration-300 transform hover:scale-105`}>
      <CardHeader className="text-center pb-4">
        <div className="text-4xl mb-3">{icon}</div>
        <CardTitle className="font-cyber text-xl text-foreground">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="font-tech text-muted-foreground text-center leading-relaxed">
          {description}
        </p>
      </CardContent>
    </Card>
  );
};

const FeatureGrid = () => {
  const [aggressiveness, setAggressiveness] = useState([70]);
  const [realism, setRealism] = useState([85]);
  const [creativity, setCreativity] = useState([60]);

  const features = [
    {
      icon: "🎨",
      title: "Background Change",
      description: "Transform any environment with AI-powered background replacement",
      color: 'blue' as const
    },
    {
      icon: "🔒",
      title: "Plate Blur",
      description: "Automatically detect and blur license plates for privacy",
      color: 'purple' as const
    },
    {
      icon: "⚡",
      title: "Logo Addition", 
      description: "Add custom logos and watermarks with perfect positioning",
      color: 'red' as const
    },
    {
      icon: "✨",
      title: "Quality Enhance",
      description: "AI upscaling and enhancement for crystal-clear results",
      color: 'blue' as const
    },
    {
      icon: "🎯",
      title: "Smart Cropping",
      description: "Intelligent composition adjustments for perfect framing",
      color: 'purple' as const
    },
    {
      icon: "🌟",
      title: "Effect Filters",
      description: "Apply cinematic filters and color grading effects",
      color: 'red' as const
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h3 className="font-cyber text-3xl md:text-4xl font-bold text-secondary mb-4 neon-text">
            AI TRANSFORMATION SUITE
          </h3>
          <p className="font-tech text-lg text-muted-foreground max-w-2xl mx-auto">
            Powerful AI tools designed specifically for automotive photography enhancement
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>

        {/* AI Prompt Booster Panel */}
        <Card className="bg-card/30 border-primary/20 tech-border hover-glow-blue">
          <CardHeader>
            <CardTitle className="font-cyber text-2xl text-center text-primary neon-text">
              AI PROMPT BOOSTER
            </CardTitle>
            <p className="font-tech text-center text-muted-foreground">
              Fine-tune the AI transformation parameters for perfect results
            </p>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Aggressiveness Slider */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="font-tech font-semibold text-accent">AGGRESSIVENESS</label>
                  <span className="font-cyber text-accent">{aggressiveness[0]}%</span>
                </div>
                <Slider
                  value={aggressiveness}
                  onValueChange={setAggressiveness}
                  max={100}
                  step={5}
                  className="w-full"
                />
                <p className="font-tech text-xs text-muted-foreground">
                  How dramatically should the AI modify your image
                </p>
              </div>

              {/* Realism Slider */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="font-tech font-semibold text-primary">REALISM</label>
                  <span className="font-cyber text-primary">{realism[0]}%</span>
                </div>
                <Slider
                  value={realism}
                  onValueChange={setRealism}
                  max={100}
                  step={5}
                  className="w-full"
                />
                <p className="font-tech text-xs text-muted-foreground">
                  Balance between realistic and stylized results
                </p>
              </div>

              {/* Creativity Slider */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="font-tech font-semibold text-secondary">CREATIVITY</label>
                  <span className="font-cyber text-secondary">{creativity[0]}%</span>
                </div>
                <Slider
                  value={creativity}
                  onValueChange={setCreativity}
                  max={100}
                  step={5}
                  className="w-full"
                />
                <p className="font-tech text-xs text-muted-foreground">
                  How creative and experimental the AI should be
                </p>
              </div>
            </div>

            <div className="text-center pt-4">
              <Button className="font-tech bg-gradient-neon hover-glow-purple text-lg px-8 py-3">
                APPLY SETTINGS
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default FeatureGrid;