import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

interface BadgeItemProps {
  name: string;
  description: string;
  icon: string;
  rarity: 'common' | 'rare' | 'legendary';
  unlocked: boolean;
}

const BadgeItem = ({ name, description, icon, rarity, unlocked }: BadgeItemProps) => {
  const rarityColors = {
    common: 'text-foreground border-muted',
    rare: 'text-primary border-primary',
    legendary: 'text-accent border-accent'
  };

  const rarityGlow = {
    common: '',
    rare: 'glow-blue',
    legendary: 'glow-red'
  };

  return (
    <Card className={`
      ${unlocked ? 'bg-card/50' : 'bg-muted/10 opacity-60'} 
      border-2 ${rarityColors[rarity]} tech-border transition-all duration-300 
      ${unlocked ? rarityGlow[rarity] : ''} 
      ${unlocked ? 'hover:scale-105' : ''}
    `}>
      <CardContent className="p-4 text-center">
        <div className="text-3xl mb-3">{icon}</div>
        <h4 className={`font-cyber text-sm font-bold mb-2 ${rarityColors[rarity]}`}>
          {name}
        </h4>
        <p className="font-tech text-xs text-muted-foreground leading-tight">
          {description}
        </p>
        {unlocked && (
          <Badge 
            variant="outline" 
            className={`mt-3 ${rarityColors[rarity]} font-tech text-xs`}
          >
            {rarity.toUpperCase()}
          </Badge>
        )}
        {!unlocked && (
          <div className="mt-3">
            <span className="font-tech text-xs text-muted-foreground">🔒 LOCKED</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

const ProfileBadges = () => {
  const [selectedCategory, setSelectedCategory] = useState('automotive');

  const categories = [
    { id: 'automotive', name: 'AUTOMOTIVE', color: 'text-primary' },
    { id: 'photography', name: 'PHOTOGRAPHY', color: 'text-secondary' },
    { id: 'social', name: 'SOCIAL', color: 'text-accent' }
  ];

  const badges = {
    automotive: [
      { name: "JDM FANATIC", description: "Transform 50+ Japanese cars", icon: "🇯🇵", rarity: 'rare' as const, unlocked: true },
      { name: "MUSCLE KING", description: "Master of American muscle cars", icon: "💪", rarity: 'legendary' as const, unlocked: true },
      { name: "EURO ELITE", description: "European luxury specialist", icon: "🏎️", rarity: 'rare' as const, unlocked: false },
      { name: "TUNER PRO", description: "Expert in car modifications", icon: "🔧", rarity: 'common' as const, unlocked: true },
      { name: "SPEED DEMON", description: "Supercar transformation master", icon: "⚡", rarity: 'legendary' as const, unlocked: false },
      { name: "OFF-ROAD WARRIOR", description: "Truck and SUV specialist", icon: "🏔️", rarity: 'common' as const, unlocked: true }
    ],
    photography: [
      { name: "COMPOSITION GURU", description: "Perfect framing every time", icon: "📐", rarity: 'rare' as const, unlocked: true },
      { name: "LIGHTING WIZARD", description: "Master of dramatic lighting", icon: "💡", rarity: 'legendary' as const, unlocked: false },
      { name: "COLOR MAESTRO", description: "Expert color correction skills", icon: "🎨", rarity: 'rare' as const, unlocked: true },
      { name: "DETAIL HUNTER", description: "Spot every imperfection", icon: "🔍", rarity: 'common' as const, unlocked: true },
      { name: "ANGLE ARCHITECT", description: "Creative perspective master", icon: "📐", rarity: 'common' as const, unlocked: false },
      { name: "POST-PROCESS PRO", description: "Enhancement perfectionist", icon: "✨", rarity: 'legendary' as const, unlocked: false }
    ],
    social: [
      { name: "VIRAL CREATOR", description: "1M+ total views achieved", icon: "🔥", rarity: 'legendary' as const, unlocked: false },
      { name: "COMMUNITY LEADER", description: "Help 100+ fellow enthusiasts", icon: "👑", rarity: 'rare' as const, unlocked: true },
      { name: "TREND SETTER", description: "Start new transformation trends", icon: "📈", rarity: 'rare' as const, unlocked: false },
      { name: "SHARE MASTER", description: "Share 500+ transformations", icon: "📤", rarity: 'common' as const, unlocked: true },
      { name: "ENGAGEMENT KING", description: "Highest interaction rates", icon: "💬", rarity: 'common' as const, unlocked: true },
      { name: "INFLUENCE TITAN", description: "Shape the car community", icon: "🌟", rarity: 'legendary' as const, unlocked: false }
    ]
  };

  const currentBadges = badges[selectedCategory as keyof typeof badges];
  const unlockedCount = currentBadges.filter(badge => badge.unlocked).length;

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h3 className="font-cyber text-3xl md:text-4xl font-bold text-secondary mb-4 neon-text">
            PROFILE BADGES
          </h3>
          <p className="font-tech text-lg text-muted-foreground max-w-2xl mx-auto">
            Earn badges and show off your automotive expertise to the community
          </p>
        </div>

        {/* Profile Stats */}
        <Card className="bg-card/30 border-primary/20 tech-border hover-glow-blue mb-12">
          <CardHeader>
            <CardTitle className="font-cyber text-2xl text-center text-primary">
              YOUR PROFILE STATS
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="font-cyber text-3xl text-accent mb-2">127</div>
                <div className="font-tech text-sm text-muted-foreground">TRANSFORMATIONS</div>
              </div>
              <div>
                <div className="font-cyber text-3xl text-primary mb-2">89K</div>
                <div className="font-tech text-sm text-muted-foreground">TOTAL VIEWS</div>
              </div>
              <div>
                <div className="font-cyber text-3xl text-secondary mb-2">42</div>
                <div className="font-tech text-sm text-muted-foreground">BADGES EARNED</div>
              </div>
              <div>
                <div className="font-cyber text-3xl text-accent mb-2">#156</div>
                <div className="font-tech text-sm text-muted-foreground">GLOBAL RANK</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Category Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              className={`font-tech ${
                selectedCategory === category.id 
                  ? 'bg-gradient-cyber hover-glow-blue' 
                  : `border-muted text-muted-foreground hover:${category.color} hover:border-current`
              }`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Progress Indicator */}
        <div className="text-center mb-8">
          <p className="font-tech text-lg text-muted-foreground">
            Progress: <span className="text-primary font-cyber">{unlockedCount}/{currentBadges.length}</span> badges unlocked
          </p>
          <div className="w-64 bg-muted/20 rounded-full h-2 mx-auto mt-3">
            <div 
              className="bg-gradient-cyber h-2 rounded-full transition-all duration-500"
              style={{ width: `${(unlockedCount / currentBadges.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Badges Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {currentBadges.map((badge, index) => (
            <BadgeItem key={index} {...badge} />
          ))}
        </div>

        {/* Social Sharing */}
        <Card className="bg-card/20 border-accent/20 tech-border hover-glow-red">
          <CardContent className="p-8 text-center">
            <h4 className="font-cyber text-2xl font-bold text-accent mb-4 neon-text">
              SHARE YOUR ACHIEVEMENTS
            </h4>
            <p className="font-tech text-muted-foreground mb-6">
              Show off your badges on social media and connect with fellow car enthusiasts
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                variant="outline"
                className="font-tech border-accent text-accent hover:bg-accent/10 hover-glow-red"
              >
                📱 Instagram Story
              </Button>
              <Button 
                variant="outline"
                className="font-tech border-primary text-primary hover:bg-primary/10 hover-glow-blue"
              >
                🐦 Twitter Post
              </Button>
              <Button 
                variant="outline"
                className="font-tech border-secondary text-secondary hover:bg-secondary/10 hover-glow-purple"
              >
                📘 Facebook Share
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ProfileBadges;