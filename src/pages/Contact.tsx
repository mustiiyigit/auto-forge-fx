import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    category: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  const faqs = [
    {
      question: "How long does it take to process an image?",
      answer: "Most transformations are completed within 5-10 seconds. During peak times, it may take up to 30 seconds."
    },
    {
      question: "What image formats do you support?",
      answer: "We support JPG, PNG, and WebP formats. Images should be at least 512x512 pixels for best results."
    },
    {
      question: "Can I use SelfAuto for commercial purposes?",
      answer: "Yes! Pro and Enterprise plans include commercial usage rights. Free plan is for personal use only."
    },
    {
      question: "Do you offer bulk processing discounts?",
      answer: "Enterprise plans include bulk processing. Contact sales for custom pricing on large volume needs."
    },
    {
      question: "How do I cancel my subscription?",
      answer: "You can cancel anytime from your account settings. Your account remains active until the end of the billing period."
    },
    {
      question: "Is my data secure?",
      answer: "Yes, we use enterprise-grade security. Images are encrypted in transit and automatically deleted after processing."
    }
  ];

  const contactMethods = [
    {
      icon: "💬",
      title: "Live Chat",
      description: "Get instant help from our support team",
      action: "Start Chat",
      available: "Available 24/7"
    },
    {
      icon: "📧",
      title: "Email Support",
      description: "Send us a detailed message",
      action: "Send Email",
      available: "Response in 2-4 hours"
    },
    {
      icon: "📞",
      title: "Phone Support",
      description: "Speak directly with our experts",
      action: "Call Now",
      available: "Mon-Fri 9AM-6PM PST"
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
              GET IN <span className="text-secondary">TOUCH</span>
            </h1>
            <p className="font-tech text-xl text-muted-foreground max-w-3xl mx-auto">
              Have questions about SelfAuto? Need technical support? Want to partner with us? 
              We're here to help you every step of the way.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {/* Contact Form */}
            <Card className="bg-card/50 border-primary/30 tech-border p-8">
              <h2 className="font-cyber text-2xl text-primary mb-6">Send us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="font-tech text-sm text-primary block mb-2">Name *</label>
                    <Input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="bg-muted/20 border-primary/30 font-tech"
                      required
                    />
                  </div>
                  <div>
                    <label className="font-tech text-sm text-primary block mb-2">Email *</label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="bg-muted/20 border-primary/30 font-tech"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="font-tech text-sm text-primary block mb-2">Category</label>
                  <Select onValueChange={(value) => setFormData({...formData, category: value})}>
                    <SelectTrigger className="bg-muted/20 border-primary/30 font-tech">
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="support">Technical Support</SelectItem>
                      <SelectItem value="billing">Billing Question</SelectItem>
                      <SelectItem value="feature">Feature Request</SelectItem>
                      <SelectItem value="partnership">Partnership</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="font-tech text-sm text-primary block mb-2">Subject *</label>
                  <Input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    className="bg-muted/20 border-primary/30 font-tech"
                    required
                  />
                </div>

                <div>
                  <label className="font-tech text-sm text-primary block mb-2">Message *</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="bg-muted/20 border-primary/30 font-tech min-h-32"
                    placeholder="Tell us how we can help you..."
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="cyber" 
                  size="lg" 
                  className="w-full font-tech"
                >
                  Send Message
                </Button>
              </form>
            </Card>

            {/* Contact Methods */}
            <div className="space-y-6">
              <h2 className="font-cyber text-2xl text-primary mb-6">Other Ways to Reach Us</h2>
              
              {contactMethods.map((method, index) => (
                <Card key={index} className="bg-card/50 border-primary/30 tech-border p-6 hover:glow-blue transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">{method.icon}</div>
                    <div className="flex-1">
                      <h3 className="font-cyber text-lg text-primary mb-2">{method.title}</h3>
                      <p className="font-tech text-sm text-muted-foreground mb-3">{method.description}</p>
                      <p className="font-tech text-xs text-secondary mb-4">{method.available}</p>
                      <Button variant="outline" size="sm" className="font-tech">
                        {method.action}
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}

              {/* Office Info */}
              <Card className="bg-card/50 border-primary/30 tech-border p-6">
                <h3 className="font-cyber text-lg text-primary mb-4">Headquarters</h3>
                <div className="space-y-2 font-tech text-sm text-muted-foreground">
                  <p>SelfAuto Inc.</p>
                  <p>1234 Innovation Drive</p>
                  <p>San Francisco, CA 94105</p>
                  <p>United States</p>
                </div>
              </Card>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-16">
            <h2 className="font-cyber text-3xl text-primary text-center mb-12">Frequently Asked Questions</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {faqs.map((faq, index) => (
                <Card key={index} className="bg-card/50 border-primary/30 tech-border p-6">
                  <h3 className="font-tech text-primary font-semibold mb-3">{faq.question}</h3>
                  <p className="font-tech text-sm text-muted-foreground">{faq.answer}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Status & Updates */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-card/50 border-primary/30 tech-border p-8 text-center">
              <div className="text-4xl mb-4">🟢</div>
              <h3 className="font-cyber text-xl text-primary mb-2">System Status</h3>
              <p className="font-tech text-sm text-muted-foreground mb-4">All systems operational</p>
              <Button variant="outline" size="sm" className="font-tech">
                View Status Page
              </Button>
            </Card>

            <Card className="bg-card/50 border-primary/30 tech-border p-8 text-center">
              <div className="text-4xl mb-4">📢</div>
              <h3 className="font-cyber text-xl text-primary mb-2">Latest Updates</h3>
              <p className="font-tech text-sm text-muted-foreground mb-4">Version 2.1 - New AI models released</p>
              <Button variant="outline" size="sm" className="font-tech">
                View Changelog
              </Button>
            </Card>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Contact;