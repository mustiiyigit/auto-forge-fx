import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const UploadZone = () => {
  const [dragActive, setDragActive] = useState(false);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      const reader = new FileReader();
      reader.onload = (event) => {
        setUploadedImage(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
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
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="font-cyber text-3xl md:text-4xl font-bold text-primary mb-4 neon-text">
            UPLOAD YOUR RIDE
          </h3>
          <p className="font-tech text-lg text-muted-foreground">
            Drag & drop your car photo or click to browse
          </p>
        </div>

        <Card className={`
          relative overflow-hidden bg-card/50 border-2 transition-all duration-300 tech-border
          ${dragActive ? 'border-primary glow-blue scale-105' : 'border-muted/30'}
          ${uploadedImage ? 'min-h-[400px]' : 'min-h-[300px]'}
        `}>
          <div
            className="p-8 text-center cursor-pointer h-full flex flex-col items-center justify-center"
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
            onClick={() => document.getElementById('file-input')?.click()}
          >
            {uploadedImage ? (
              <div className="w-full h-full flex flex-col items-center">
                <img 
                  src={uploadedImage} 
                  alt="Uploaded car" 
                  className="max-h-80 max-w-full object-contain rounded-lg shadow-cyber mb-6"
                />
                <Button 
                  variant="outline"
                  className="font-tech border-accent text-accent hover:bg-accent/10 hover-glow-red"
                  onClick={(e) => {
                    e.stopPropagation();
                    setUploadedImage(null);
                  }}
                >
                  Upload Different Photo
                </Button>
              </div>
            ) : (
              <>
                <div className="mb-6">
                  <div className="w-24 h-24 mx-auto mb-4 border-2 border-dashed border-primary/50 rounded-full flex items-center justify-center">
                    <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </div>
                </div>
                
                <h4 className="font-tech text-xl font-semibold text-foreground mb-2">
                  Drop your car photo here
                </h4>
                <p className="font-tech text-muted-foreground mb-6">
                  or click to browse from your device
                </p>
                
                <Button className="font-tech bg-gradient-cyber hover-glow-blue">
                  Choose File
                </Button>
                
                <div className="mt-6 text-sm text-muted-foreground font-tech">
                  <p>Supported formats: JPG, PNG, WebP</p>
                  <p>Max file size: 10MB</p>
                </div>
              </>
            )}
            
            <input
              id="file-input"
              type="file"
              className="hidden"
              accept="image/*"
              onChange={handleFileInput}
            />
          </div>
        </Card>

        {uploadedImage && (
          <div className="mt-8 text-center">
            <Button 
              size="lg"
              className="font-tech text-lg px-8 py-4 bg-gradient-neon hover-glow-purple font-semibold"
            >
              START AI TRANSFORMATION
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default UploadZone;