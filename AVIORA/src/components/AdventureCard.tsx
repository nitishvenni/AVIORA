import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface AdventureCardProps {
  title: string;
  description: string;
  image: string;
  difficulty: "Easy" | "Moderate" | "Challenging";
  duration: string;
}

const AdventureCard = ({ title, description, image, difficulty, duration }: AdventureCardProps) => {
  const difficultyColors = {
    Easy: "bg-green-500",
    Moderate: "bg-yellow-500",
    Challenging: "bg-red-500",
  };

  return (
    <Card className="group overflow-hidden transition-all hover:shadow-[var(--shadow-hover)] hover:-translate-y-2 border-0 bg-card animate-scale-in">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/40 to-transparent" />
        
        {/* Difficulty Badge */}
        <div className="absolute top-4 right-4 flex items-center gap-2 bg-background/90 backdrop-blur-sm rounded-full px-3 py-1">
          <div className={`w-2 h-2 rounded-full ${difficultyColors[difficulty]}`} />
          <span className="text-xs font-semibold">{difficulty}</span>
        </div>

        {/* Duration */}
        <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-sm rounded-full px-3 py-1">
          <span className="text-xs font-semibold">{duration}</span>
        </div>
      </div>

      <CardContent className="p-6">
        <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground mb-4 line-clamp-2">
          {description}
        </p>
        <Button 
          variant="ghost" 
          className="w-full group/btn hover:bg-primary hover:text-primary-foreground"
        >
          View Details
          <ArrowRight className="group-hover/btn:translate-x-1 transition-transform" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default AdventureCard;
