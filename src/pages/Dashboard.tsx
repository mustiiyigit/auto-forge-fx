import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";

const Dashboard = () => {
  const [selectedImages, setSelectedImages] = useState<string[]>([]);

  const userStats = {
    totalTransformations: 147,
    thisMonth: 23,
    plan: "Pro",
    remainingCredits: "Unlimited"
  };

  const recentTransformations = [
    {
      id: "1",
      original: "/api/placeholder/200/150",
      transformed: "/api/placeholder/200/150",
      background: "Tokyo Drift Street",
      date: "2024-01-15",
      status: "completed"
    },
    {
      id: "2",
      original: "/api/placeholder/200/150",
      transformed: "/api/placeholder/200/150",
      background: "Luxury Showroom",
      date: "2024-01-14",
      status: "completed"
    },
    {
      id: "3",
      original: "/api/placeholder/200/150",
      transformed: "/api/placeholder/200/150",
      background: "Hyper Garage",
      date: "2024-01-13",
      status: "processing"
    },
    {
      id: "4",
      original: "/api/placeholder/200/150",
      transformed: "/api/placeholder/200/150",
      background: "Futuristic Battlefield",
      date: "2024-01-12",
      status: "completed"
    }
  ];

  const handleImageSelect = (id: string) => {
    setSelectedImages(prev => 
      prev.includes(id) 
        ? prev.filter(imageId => imageId !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-dark">
      <Navbar />
      
      <div className="pt-20 px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div>
              <h1 className="font-cyber text-4xl md:text-5xl font-black neon-text mb-4">
                WELCOME BACK
              </h1>
              <p className="font-tech text-lg text-muted-foreground">
                Manage your transformations and track your progress
              </p>
            </div>
            <Button variant="cyber" size="lg" className="font-tech mt-4 md:mt-0">
              New Transformation
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <Card className="bg-card/50 border-primary/30 tech-border p-6 text-center">
              <div className="font-cyber text-3xl text-secondary mb-2">{userStats.totalTransformations}</div>
              <p className="font-tech text-muted-foreground">Total Transformations</p>
            </Card>
            
            <Card className="bg-card/50 border-primary/30 tech-border p-6 text-center">
              <div className="font-cyber text-3xl text-secondary mb-2">{userStats.thisMonth}</div>
              <p className="font-tech text-muted-foreground">This Month</p>
            </Card>
            
            <Card className="bg-card/50 border-primary/30 tech-border p-6 text-center">
              <Badge variant="secondary" className="font-tech text-lg px-4 py-2 mb-2">
                {userStats.plan}
              </Badge>
              <p className="font-tech text-muted-foreground">Current Plan</p>
            </Card>
            
            <Card className="bg-card/50 border-primary/30 tech-border p-6 text-center">
              <div className="font-cyber text-3xl text-secondary mb-2">∞</div>
              <p className="font-tech text-muted-foreground">Remaining Credits</p>
            </Card>
          </div>

          {/* Main Content */}
          <Tabs defaultValue="recent" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-muted/20 mb-8">
              <TabsTrigger value="recent" className="font-tech">Recent Work</TabsTrigger>
              <TabsTrigger value="favorites" className="font-tech">Favorites</TabsTrigger>
              <TabsTrigger value="settings" className="font-tech">Settings</TabsTrigger>
            </TabsList>
            
            <TabsContent value="recent">
              <div className="space-y-6">
                {/* Bulk Actions */}
                {selectedImages.length > 0 && (
                  <Card className="bg-card/50 border-primary/30 tech-border p-4">
                    <div className="flex items-center justify-between">
                      <p className="font-tech text-primary">
                        {selectedImages.length} images selected
                      </p>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="font-tech">
                          Download All
                        </Button>
                        <Button variant="outline" size="sm" className="font-tech">
                          Re-edit Selected
                        </Button>
                        <Button variant="destructive" size="sm" className="font-tech">
                          Delete Selected
                        </Button>
                      </div>
                    </div>
                  </Card>
                )}

                {/* Transformations Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {recentTransformations.map((item) => (
                    <Card 
                      key={item.id}
                      className={`bg-card/50 border-2 tech-border transition-all duration-300 ${
                        selectedImages.includes(item.id) 
                          ? "border-primary glow-blue" 
                          : "border-primary/30 hover:border-primary/50"
                      }`}
                    >
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <Badge 
                            variant={item.status === "completed" ? "default" : "secondary"}
                            className="font-tech"
                          >
                            {item.status}
                          </Badge>
                          <input
                            type="checkbox"
                            checked={selectedImages.includes(item.id)}
                            onChange={() => handleImageSelect(item.id)}
                            className="w-4 h-4 text-primary"
                          />
                        </div>

                        {/* Before/After Comparison */}
                        <div className="relative mb-4">
                          <div className="grid grid-cols-2 gap-2">
                            <div>
                              <p className="font-tech text-xs text-muted-foreground mb-1">Original</p>
                              <img 
                                src={item.original} 
                                alt="Original" 
                                className="w-full h-20 object-cover rounded border border-primary/30"
                              />
                            </div>
                            <div>
                              <p className="font-tech text-xs text-muted-foreground mb-1">Transformed</p>
                              <img 
                                src={item.transformed} 
                                alt="Transformed" 
                                className="w-full h-20 object-cover rounded border border-primary/30"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="space-y-2 mb-4">
                          <p className="font-tech text-sm text-primary">Background: {item.background}</p>
                          <p className="font-tech text-xs text-muted-foreground">Date: {item.date}</p>
                        </div>

                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" className="font-tech flex-1">
                            Download
                          </Button>
                          <Button variant="ghost_cyber" size="sm" className="font-tech flex-1">
                            Re-edit
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>

                {/* Load More */}
                <div className="text-center">
                  <Button variant="outline" className="font-tech">
                    Load More Transformations
                  </Button>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="favorites">
              <Card className="bg-card/50 border-primary/30 tech-border p-12 text-center">
                <div className="text-4xl mb-4">⭐</div>
                <h3 className="font-cyber text-xl text-primary mb-4">No Favorites Yet</h3>
                <p className="font-tech text-muted-foreground mb-6">
                  Star your best transformations to access them quickly
                </p>
                <Button variant="cyber" className="font-tech">
                  Browse Your Work
                </Button>
              </Card>
            </TabsContent>
            
            <TabsContent value="settings">
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-card/50 border-primary/30 tech-border p-6">
                  <h3 className="font-cyber text-xl text-primary mb-6">Account Settings</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="font-tech text-sm text-primary block mb-2">Display Name</label>
                      <input 
                        type="text" 
                        defaultValue="Car Enthusiast"
                        className="w-full p-3 bg-muted/20 border border-primary/30 rounded-lg font-tech"
                      />
                    </div>
                    <div>
                      <label className="font-tech text-sm text-primary block mb-2">Email</label>
                      <input 
                        type="email" 
                        defaultValue="user@example.com"
                        className="w-full p-3 bg-muted/20 border border-primary/30 rounded-lg font-tech"
                      />
                    </div>
                    <Button variant="cyber" className="font-tech">
                      Save Changes
                    </Button>
                  </div>
                </Card>

                <Card className="bg-card/50 border-primary/30 tech-border p-6">
                  <h3 className="font-cyber text-xl text-primary mb-6">Preferences</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-tech text-foreground">Auto-save transformations</span>
                      <input type="checkbox" defaultChecked className="w-4 h-4 text-primary" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-tech text-foreground">Email notifications</span>
                      <input type="checkbox" defaultChecked className="w-4 h-4 text-primary" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-tech text-foreground">High quality processing</span>
                      <input type="checkbox" defaultChecked className="w-4 h-4 text-primary" />
                    </div>
                  </div>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;