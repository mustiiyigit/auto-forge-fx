import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import tokyoStreet from "@/assets/tokyo-street-bg.jpg";
import luxuryShowroom from "@/assets/luxury-showroom-bg.jpg";
import hyperGarage from "@/assets/hyper-garage-bg.jpg";

interface BackgroundPresetProps {
  name: string;
  image: string;
  description: string;
  selected: boolean;
  onClick: () => void;
}

const BackgroundPreset = ({ name, image, description, selected, onClick }: BackgroundPresetProps) => {
  return (
    <Card 
      className={`
        cursor-pointer transition-all duration-300 transform hover:scale-105
        ${selected ? 'border-primary glow-blue bg-primary/10' : 'border-muted/30 hover-glow-blue'}
        tech-border bg-card/50
      `}
      onClick={onClick}
    >
      <CardContent className="p-4">
        <div className="aspect-video rounded-lg overflow-hidden mb-4">
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          />
        </div>
        <h4 className="font-cyber text-lg font-bold text-foreground mb-2">{name}</h4>
        <p className="font-tech text-sm text-muted-foreground">{description}</p>
        {selected && (
          <div className="mt-3 flex items-center justify-center">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse-glow" />
            <span className="font-tech text-xs text-primary ml-2">SELECTED</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

const PresetBackgrounds = () => {
  const [selectedPreset, setSelectedPreset] = useState<string | null>(null);

  const presets = [
    {
      name: "TOKYO DRIFT STREET",
      image: tokyoStreet,
      description: "Neon-lit Japanese street scene with rain-soaked asphalt and cyberpunk vibes"
    },
    {
      name: "LUXURY SHOWROOM",
      image: luxuryShowroom,
      description: "Premium showroom environment with dramatic lighting and modern architecture"
    },
    {
      name: "HYPER GARAGE",
      image: hyperGarage,
      description: "Futuristic garage with high-tech equipment and neon lighting effects"
    },
    {
      name: "FUTURISTIC BATTLEFIELD",
      image: "/placeholder-battlefield.jpg",
      description: "Post-apocalyptic landscape with dramatic skies and industrial elements"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h3 className="font-cyber text-3xl md:text-4xl font-bold text-accent mb-4 neon-text">
            PRESET BACKGROUNDS
          </h3>
          <p className="font-tech text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from our curated collection of automotive photography backgrounds
          </p>
        </div>

        {/* Presets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {presets.map((preset) => (
            <BackgroundPreset
              key={preset.name}
              name={preset.name}
              image={preset.image}
              description={preset.description}
              selected={selectedPreset === preset.name}
              onClick={() => setSelectedPreset(preset.name)}
            />
          ))}
        </div>

        {/* Custom Background Upload */}
        <Card className="bg-card/30 border-secondary/20 tech-border hover-glow-purple">
          <CardContent className="p-8 text-center">
            <div className="mb-6">
              <div className="w-16 h-16 mx-auto mb-4 border-2 border-dashed border-secondary/50 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <h4 className="font-cyber text-xl font-bold text-secondary mb-2">
                CUSTOM BACKGROUND
              </h4>
              <p className="font-tech text-muted-foreground mb-6">
                Upload your own background image for unique transformations
              </p>
            </div>
            
            <Button 
              variant="outline"
              className="font-tech border-secondary text-secondary hover:bg-secondary/10 hover-glow-purple"
            >
              UPLOAD CUSTOM BACKGROUND
            </Button>
          </CardContent>
        </Card>

        {/* Live Preview Section */}
        {selectedPreset && (
          <div className="mt-16">
            <Card className="bg-card/20 border-primary/20 tech-border">
              <CardContent className="p-8">
                <h4 className="font-cyber text-2xl font-bold text-center text-primary mb-8 neon-text">
                  LIVE PREVIEW & COMPARISON
                </h4>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Before */}
                  <div className="text-center">
                    <h5 className="font-tech text-lg font-semibold text-muted-foreground mb-4">BEFORE</h5>
                    <div className="aspect-video bg-muted/20 rounded-lg border border-muted/30 flex items-center justify-center">
                      <p className="font-tech text-muted-foreground">Upload your car photo to see preview</p>
                    </div>
                  </div>
                  
                  {/* After */}
                  <div className="text-center">
                    <h5 className="font-tech text-lg font-semibold text-primary mb-4">AFTER</h5>
                    <div className="aspect-video bg-muted/20 rounded-lg border border-primary/30 flex items-center justify-center glow-blue">
                      <p className="font-tech text-primary">AI transformation preview will appear here</p>
                    </div>
                  </div>
                </div>
                
                <div className="text-center mt-8">
                  <Button 
                    size="lg"
                    className="font-tech text-lg px-8 py-4 bg-gradient-cyber hover-glow-blue font-semibold mr-4"
                  >
                    GENERATE TRANSFORMATION
                  </Button>
                  <Button 
                    variant="outline"
                    size="lg"
                    className="font-tech text-lg px-8 py-4 border-accent text-accent hover:bg-accent/10 hover-glow-red"
                  >
                    DOWNLOAD RESULT
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </section>
  );
};

export default PresetBackgrounds;