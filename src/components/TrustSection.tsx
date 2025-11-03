import { Shield, Users, Camera, Headphones } from "lucide-react";

const trustFeatures = [
  {
    icon: Shield,
    title: "Safety First",
    description: "Certified guides, premium equipment, and comprehensive insurance on every adventure.",
  },
  {
    icon: Users,
    title: "Expert Guides",
    description: "Experienced professionals who prioritize your safety and create unforgettable moments.",
  },
  {
    icon: Camera,
    title: "Capture Memories",
    description: "Professional photography included. Take home stunning photos of your adventure.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock assistance before, during, and after your adventure.",
  },
];

const TrustSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Adventure With Confidence
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We handle everything. You just show up and feel alive.
          </p>
        </div>

        {/* Trust Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={feature.title}
                className="text-center group hover:scale-105 transition-transform animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors shadow-[var(--shadow-card)] group-hover:shadow-[var(--shadow-hover)]">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats Bar */}
        <div className="mt-20 bg-gradient-to-r from-primary via-accent to-primary p-8 rounded-2xl shadow-[var(--shadow-adventure)]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-primary-foreground">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">1000+</div>
              <div className="text-sm opacity-90">Happy Travelers</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">50+</div>
              <div className="text-sm opacity-90">Locations</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">100%</div>
              <div className="text-sm opacity-90">Safety Record</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">4.9★</div>
              <div className="text-sm opacity-90">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
