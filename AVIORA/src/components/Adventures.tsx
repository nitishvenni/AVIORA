import AdventureCard from "./AdventureCard";
import bungeeJumping from "@/assets/bungee-jumping.jpg";
import riverRafting from "@/assets/river-rafting.jpg";
import trekkingCamping from "@/assets/trekking-camping.jpg";
import paragliding from "@/assets/paragliding.jpg";
import hotAirBalloon from "@/assets/hot-air-balloon.jpg";
import snowTrek from "@/assets/snow-trek.jpg";

const adventures = [
  {
    title: "Bungee Jumping",
    description: "Take the leap. Feel the rush. Conquer your fears in the ultimate freefall experience.",
    image: bungeeJumping,
    difficulty: "Challenging" as const,
    duration: "2-3 hours",
  },
  {
    title: "River Rafting",
    description: "Navigate wild rapids with your crew. Pure adrenaline meets teamwork on raging waters.",
    image: riverRafting,
    difficulty: "Moderate" as const,
    duration: "4-6 hours",
  },
  {
    title: "Trekking & Camping",
    description: "Disconnect to reconnect. Trek through mountains and camp under the stars.",
    image: trekkingCamping,
    difficulty: "Moderate" as const,
    duration: "2-3 days",
  },
  {
    title: "Paragliding",
    description: "Soar like a bird. Experience freedom from above with breathtaking aerial views.",
    image: paragliding,
    difficulty: "Easy" as const,
    duration: "1-2 hours",
  },
  {
    title: "Hot Air Balloon",
    description: "Float through the sky at sunrise. Peaceful adventure with stunning panoramic views.",
    image: hotAirBalloon,
    difficulty: "Easy" as const,
    duration: "2-3 hours",
  },
  {
    title: "Snow Trek",
    description: "Conquer winter peaks. Challenge yourself in pristine snow-covered landscapes.",
    image: snowTrek,
    difficulty: "Challenging" as const,
    duration: "3-5 days",
  },
];

const Adventures = () => {
  return (
    <section id="adventures" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Choose Your Adventure
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Six unforgettable experiences. One simple booking.
            <br />
            Your story starts here.
          </p>
        </div>

        {/* Adventure Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {adventures.map((adventure, index) => (
            <div 
              key={adventure.title}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <AdventureCard {...adventure} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Adventures;
