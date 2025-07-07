import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "0",
      period: "forever",
      description: "Perfect for trying out SelfAuto",
      features: [
        "5 transformations per month",
        "Basic background presets",
        "720p resolution output",
        "Standard processing speed",
        "Community support"
      ],
      limitations: [
        "Watermarked images",
        "Limited backgrounds",
        "Basic quality enhancement"
      ],
      buttonText: "Start Free",
      buttonVariant: "outline" as const,
      popular: false
    },
    {
      name: "Pro",
      price: "19",
      period: "month",
      description: "For serious car enthusiasts",
      features: [
        "Unlimited transformations",
        "60+ premium backgrounds",
        "4K resolution output",
        "Priority processing",
        "Logo addition feature",
        "License plate blur",
        "Advanced AI controls",
        "Email support",
        "No watermarks"
      ],
      limitations: [],
      buttonText: "Upgrade to Pro",
      buttonVariant: "cyber" as const,
      popular: true
    },
    {
      name: "Enterprise",
      price: "99",
      period: "month",
      description: "For dealerships and businesses",
      features: [
        "Everything in Pro",
        "Bulk processing (100+ images)",
        "Custom background creation",
        "Brand kit integration",
        "API access",
        "White-label solution",
        "Dedicated account manager",
        "24/7 priority support",
        "Custom integrations"
      ],
      limitations: [],
      buttonText: "Contact Sales",
      buttonVariant: "neon" as const,
      popular: false
    }
  ];

  const faqs = [
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can cancel your subscription at any time. Your account will remain active until the end of your current billing period."
    },
    {
      question: "Do you offer refunds?",
      answer: "We offer a 30-day money-back guarantee for all paid plans. If you're not satisfied, contact us for a full refund."
    },
    {
      question: "What file formats do you support?",
      answer: "We support JPG, PNG, and WebP formats for input. Output is available in JPG and PNG with various quality settings."
    },
    {
      question: "Is there a limit on image size?",
      answer: "Free users can upload images up to 5MB. Pro and Enterprise users can upload images up to 25MB."
    },
    {
      question: "Do you store my images?",
      answer: "Images are temporarily stored for processing and automatically deleted after 24 hours. Enterprise users can opt for immediate deletion."
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
              SIMPLE <span className="text-secondary">PRICING</span>
            </h1>
            <p className="font-tech text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the perfect plan for your car transformation needs. 
              Upgrade or downgrade anytime with no long-term commitments.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {plans.map((plan, index) => (
              <Card 
                key={index}
                className={`bg-card/50 border-2 tech-border relative ${
                  plan.popular 
                    ? "border-primary glow-blue scale-105" 
                    : "border-primary/30 hover:border-primary/50"
                } transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-cyber px-4 py-1 rounded-full">
                      <span className="font-tech text-sm font-bold">MOST POPULAR</span>
                    </div>
                  </div>
                )}
                
                <div className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="font-cyber text-2xl text-primary mb-2">{plan.name}</h3>
                    <div className="mb-4">
                      <span className="font-cyber text-4xl text-foreground">${plan.price}</span>
                      <span className="font-tech text-muted-foreground">/{plan.period}</span>
                    </div>
                    <p className="font-tech text-sm text-muted-foreground">{plan.description}</p>
                  </div>

                  <div className="space-y-4 mb-8">
                    <h4 className="font-tech text-primary font-semibold">Included:</h4>
                    <ul className="space-y-3">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="font-tech text-sm text-foreground/80 flex items-start">
                          <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 glow-blue shrink-0"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    {plan.limitations.length > 0 && (
                      <>
                        <h4 className="font-tech text-muted-foreground font-semibold mt-6">Limitations:</h4>
                        <ul className="space-y-2">
                          {plan.limitations.map((limitation, idx) => (
                            <li key={idx} className="font-tech text-sm text-muted-foreground flex items-start">
                              <span className="w-2 h-2 bg-muted-foreground/50 rounded-full mr-3 mt-2 shrink-0"></span>
                              {limitation}
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>

                  <Button 
                    variant={plan.buttonVariant}
                    size="lg"
                    className="w-full font-tech"
                  >
                    {plan.buttonText}
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* Features Comparison */}
          <div className="mb-16">
            <h2 className="font-cyber text-3xl text-primary text-center mb-8">Feature Comparison</h2>
            <Card className="bg-card/50 border-primary/30 tech-border overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-primary/30">
                      <th className="font-tech text-left p-4 text-primary">Feature</th>
                      <th className="font-tech text-center p-4 text-primary">Free</th>
                      <th className="font-tech text-center p-4 text-primary">Pro</th>
                      <th className="font-tech text-center p-4 text-primary">Enterprise</th>
                    </tr>
                  </thead>
                  <tbody className="font-tech text-sm">
                    <tr className="border-b border-primary/10">
                      <td className="p-4">Monthly Transformations</td>
                      <td className="p-4 text-center">5</td>
                      <td className="p-4 text-center">Unlimited</td>
                      <td className="p-4 text-center">Unlimited</td>
                    </tr>
                    <tr className="border-b border-primary/10">
                      <td className="p-4">Max Resolution</td>
                      <td className="p-4 text-center">720p</td>
                      <td className="p-4 text-center">4K</td>
                      <td className="p-4 text-center">4K+</td>
                    </tr>
                    <tr className="border-b border-primary/10">
                      <td className="p-4">Background Presets</td>
                      <td className="p-4 text-center">10</td>
                      <td className="p-4 text-center">60+</td>
                      <td className="p-4 text-center">Custom</td>
                    </tr>
                    <tr className="border-b border-primary/10">
                      <td className="p-4">API Access</td>
                      <td className="p-4 text-center">❌</td>
                      <td className="p-4 text-center">❌</td>
                      <td className="p-4 text-center">✅</td>
                    </tr>
                    <tr>
                      <td className="p-4">Support Level</td>
                      <td className="p-4 text-center">Community</td>
                      <td className="p-4 text-center">Email</td>
                      <td className="p-4 text-center">24/7 Priority</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card>
          </div>

          {/* FAQ Section */}
          <div className="mb-16">
            <h2 className="font-cyber text-3xl text-primary text-center mb-8">Frequently Asked Questions</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {faqs.map((faq, index) => (
                <Card key={index} className="bg-card/50 border-primary/30 tech-border p-6">
                  <h3 className="font-tech text-primary font-semibold mb-3">{faq.question}</h3>
                  <p className="font-tech text-sm text-muted-foreground">{faq.answer}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Money Back Guarantee */}
          <div className="text-center bg-gradient-cyber/10 rounded-xl p-8 border border-primary/30">
            <div className="text-4xl mb-4">💰</div>
            <h2 className="font-cyber text-2xl text-primary mb-4">30-Day Money Back Guarantee</h2>
            <p className="font-tech text-muted-foreground">
              Try SelfAuto risk-free. If you're not completely satisfied with your results, 
              we'll refund your money within 30 days. No questions asked.
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Pricing;