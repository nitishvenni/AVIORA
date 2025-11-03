import { Button } from "@/components/ui/button";
import { Wind, Menu, MapPin, Bell } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate("/")}>
            <Wind className="w-8 h-8 text-primary" />
            <span className="text-2xl font-bold">AviOra</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="/#adventures" className="text-sm font-medium hover:text-primary transition-colors">
              Adventures
            </a>
            <button onClick={() => navigate("/trips")} className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              My Trips
            </button>
            <button onClick={() => navigate("/notifications")} className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-2">
              <Bell className="w-4 h-4" />
              Notifications
            </button>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="default">Book Now</Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              <a href="/#adventures" className="text-sm font-medium hover:text-primary transition-colors py-2">
                Adventures
              </a>
              <button onClick={() => navigate("/trips")} className="text-sm font-medium hover:text-primary transition-colors py-2 flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                My Trips
              </button>
              <button onClick={() => navigate("/notifications")} className="text-sm font-medium hover:text-primary transition-colors py-2 flex items-center gap-2">
                <Bell className="w-4 h-4" />
                Notifications
              </button>
              <Button variant="default" className="w-full">Book Now</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
