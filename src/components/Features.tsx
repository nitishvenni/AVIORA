import { Shield, CheckCircle, DollarSign, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Shield,
    title: "Safety First",
    description: "All guides are certified professionals with safety equipment and insurance coverage"
  },
  {
    icon: CheckCircle,
    title: "Verified Partners",
    description: "Every adventure provider is background-checked and regularly audited"
  },
  {
    icon: DollarSign,
    title: "Best Price Guarantee",
    description: "Direct booking with guides means no middlemen and competitive pricing"
  },
  {
    icon: Clock,
    title: "Instant Booking",
    description: "Book your adventure in minutes with immediate confirmation"
  }
];

const Features = () => {
  return (
    <section className="py-20 px-4 bg-secondary/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose AviOra</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We connect you directly with certified adventure guides for safe, authentic experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
