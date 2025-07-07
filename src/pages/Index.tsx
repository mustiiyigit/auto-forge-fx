import Hero from "@/components/Hero";
import UploadZone from "@/components/UploadZone";
import FeatureGrid from "@/components/FeatureGrid";
import PresetBackgrounds from "@/components/PresetBackgrounds";
import ProfileBadges from "@/components/ProfileBadges";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-dark relative overflow-hidden">
      {/* Background Grid Overlay */}
      <div className="absolute inset-0 grid-overlay opacity-30 pointer-events-none" />
      
      {/* Main Content */}
      <div className="relative z-10">
        <Hero />
        <UploadZone />
        <FeatureGrid />
        <PresetBackgrounds />
        <ProfileBadges />
        <Footer />
      </div>
      
      {/* Background Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }} />
    </div>
  );
};

export default Index;