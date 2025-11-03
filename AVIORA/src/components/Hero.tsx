import { Button } from "@/components/ui/button";
import { ArrowRight, Wind } from "lucide-react";
import heroImage from "@/assets/hero-adventure.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Adventure awaits - Paragliding over mountains"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/70 via-secondary/50 to-background/90" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="animate-fade-in">
          {/* Tagline */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <Wind className="w-6 h-6 text-primary animate-float" />
            <span className="text-primary font-semibold tracking-wide uppercase text-sm">
              Your Trusted Adventure Partner
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-6 leading-tight">
            Book Verified
            <br />
            <span className="adventure-glow">Adventure Experiences</span>
          </h1>

          {/* Subheadline - Clear Value Proposition */}
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto font-light">
            Connect with certified guides for paragliding, trekking, rafting & more.
            <br />
            <span className="font-semibold">100% safety verified • Instant booking • Best prices</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="hero" 
              size="xl"
              className="group"
              onClick={() => document.getElementById('adventures')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Adventures
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="xl"
              className="bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Us
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">6</div>
              <div className="text-sm text-primary-foreground/80 uppercase tracking-wide">Epic Adventures</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-primary-foreground/80 uppercase tracking-wide">Safety First</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">∞</div>
              <div className="text-sm text-primary-foreground/80 uppercase tracking-wide">Memories</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center p-2">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
