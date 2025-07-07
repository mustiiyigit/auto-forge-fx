import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Editor = () => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [selectedBackground, setSelectedBackground] = useState<string>("tokyo");
  const [aggressiveness, setAggressiveness] = useState([50]);
  const [realism, setRealism] = useState([75]);
  const [creativity, setCreativity] = useState([60]);

  const backgrounds = [
    { id: "tokyo", name: "Tokyo Drift Street", preview: "/api/placeholder/150/100" },
    { id: "garage", name: "Hyper Garage", preview: "/api/placeholder/150/100" },
    { id: "showroom", name: "Luxury Showroom", preview: "/api/placeholder/150/100" },
    { id: "battlefield", name: "Futuristic Battlefield", preview: "/api/placeholder/150/100" },
  ];

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (event) => {
        setUploadedImage(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-dark">
      <Navbar />
      
      <div className="pt-20 px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="font-cyber text-4xl md:text-6xl font-black neon-text mb-4">
              AI CAR <span className="text-secondary">EDITOR</span>
            </h1>
            <p className="font-tech text-lg text-muted-foreground">
              Transform your ride with advanced AI technology
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Upload & Preview Area */}
            <div className="space-y-6">
              <Card className="bg-card/50 border-primary/30 tech-border">
                <div className="p-6">
                  <h3 className="font-cyber text-xl text-primary mb-4">Upload Your Car</h3>
                  
                  {uploadedImage ? (
                    <div className="relative">
                      <img 
                        src={uploadedImage} 
                        alt="Uploaded car" 
                        className="w-full h-64 object-cover rounded-lg"
                      />
                      <Button 
                        variant="outline"
                        size="sm"
                        className="absolute top-2 right-2"
                        onClick={() => setUploadedImage(null)}
                      >
                        Change
                      </Button>
                    </div>
                  ) : (
                    <div className="border-2 border-dashed border-primary/50 rounded-lg p-8 text-center">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                        id="car-upload"
                      />
                      <label htmlFor="car-upload" className="cursor-pointer">
                        <div className="w-16 h-16 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                          <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                          </svg>
                        </div>
                        <p className="font-tech text-primary">Click to upload your car photo</p>
                      </label>
                    </div>
                  )}
                </div>
              </Card>

              {/* Live Preview */}
              <Card className="bg-card/50 border-primary/30 tech-border">
                <div className="p-6">
                  <h3 className="font-cyber text-xl text-primary mb-4">Live Preview</h3>
                  <div className="bg-muted/20 rounded-lg h-64 flex items-center justify-center">
                    <p className="font-tech text-muted-foreground">Preview will appear here</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Control Panel */}
            <div className="space-y-6">
              <Card className="bg-card/50 border-primary/30 tech-border">
                <div className="p-6">
                  <h3 className="font-cyber text-xl text-primary mb-6">AI Controls</h3>
                  
                  <Tabs defaultValue="background" className="w-full">
                    <TabsList className="grid w-full grid-cols-4 bg-muted/20">
                      <TabsTrigger value="background" className="font-tech">Background</TabsTrigger>
                      <TabsTrigger value="enhance" className="font-tech">Enhance</TabsTrigger>
                      <TabsTrigger value="logo" className="font-tech">Logo</TabsTrigger>
                      <TabsTrigger value="effects" className="font-tech">Effects</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="background" className="mt-6">
                      <div className="space-y-4">
                        <h4 className="font-tech text-primary">Select Background</h4>
                        <div className="grid grid-cols-2 gap-3">
                          {backgrounds.map((bg) => (
                            <div
                              key={bg.id}
                              className={`cursor-pointer rounded-lg border-2 transition-all ${
                                selectedBackground === bg.id 
                                  ? "border-primary glow-blue" 
                                  : "border-muted/30 hover:border-primary/50"
                              }`}
                              onClick={() => setSelectedBackground(bg.id)}
                            >
                              <img src={bg.preview} alt={bg.name} className="w-full h-20 object-cover rounded-t-lg" />
                              <p className="font-tech text-xs text-center p-2">{bg.name}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="enhance" className="mt-6">
                      <div className="space-y-6">
                        <div>
                          <label className="font-tech text-primary block mb-2">Quality Enhancement</label>
                          <Button variant="cyber" className="w-full font-tech">
                            Enhance Quality
                          </Button>
                        </div>
                        <div>
                          <label className="font-tech text-primary block mb-2">Plate Blur</label>
                          <Button variant="neon" className="w-full font-tech">
                            Blur License Plate
                          </Button>
                        </div>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="logo" className="mt-6">
                      <div className="space-y-4">
                        <h4 className="font-tech text-primary">Add Brand Logo</h4>
                        <input
                          type="file"
                          accept="image/*"
                          className="w-full p-3 bg-muted/20 border border-primary/30 rounded-lg font-tech"
                        />
                        <Button variant="cyber" className="w-full font-tech">
                          Apply Logo
                        </Button>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="effects" className="mt-6">
                      <div className="space-y-6">
                        <div>
                          <label className="font-tech text-primary block mb-2">
                            Aggressiveness: {aggressiveness[0]}%
                          </label>
                          <Slider
                            value={aggressiveness}
                            onValueChange={setAggressiveness}
                            max={100}
                            step={1}
                            className="w-full"
                          />
                        </div>
                        <div>
                          <label className="font-tech text-primary block mb-2">
                            Realism: {realism[0]}%
                          </label>
                          <Slider
                            value={realism}
                            onValueChange={setRealism}
                            max={100}
                            step={1}
                            className="w-full"
                          />
                        </div>
                        <div>
                          <label className="font-tech text-primary block mb-2">
                            Creativity: {creativity[0]}%
                          </label>
                          <Slider
                            value={creativity}
                            onValueChange={setCreativity}
                            max={100}
                            step={1}
                            className="w-full"
                          />
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
              </Card>

              {/* Generate Button */}
              <Button 
                size="lg" 
                className="w-full font-tech text-lg py-6 bg-gradient-neon hover-glow-purple"
                disabled={!uploadedImage}
              >
                🚀 GENERATE TRANSFORMATION
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Editor;