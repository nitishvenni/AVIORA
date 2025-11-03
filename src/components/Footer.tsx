import { Wind, Mail, Phone, MapPin, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Wind className="w-8 h-8 text-primary" />
              <span className="text-2xl font-bold">AviOra</span>
            </div>
            <p className="text-sm text-secondary-foreground/80 mb-4">
              Fly High. Live Free.
              <br />
              Creating unforgettable adventure moments.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary flex items-center justify-center transition-colors group">
                <Instagram className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary flex items-center justify-center transition-colors group">
                <Facebook className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary flex items-center justify-center transition-colors group">
                <Twitter className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
              </a>
            </div>
          </div>

          {/* Adventures */}
          <div>
            <h3 className="font-bold text-lg mb-4">Adventures</h3>
            <ul className="space-y-2 text-sm text-secondary-foreground/80">
              <li><a href="#" className="hover:text-primary transition-colors">Bungee Jumping</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">River Rafting</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Trekking & Camping</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Paragliding</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Hot Air Balloon</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Snow Trek</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-secondary-foreground/80">
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Safety Guidelines</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Our Guides</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Reviews</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Get in Touch</h3>
            <ul className="space-y-3 text-sm text-secondary-foreground/80">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                <a href="mailto:hello@aviora.com" className="hover:text-primary transition-colors">hello@aviora.com</a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                <a href="tel:+911234567890" className="hover:text-primary transition-colors">+91 123 456 7890</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                <span>Adventure Hub, Mumbai, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-foreground/20 pt-8 text-center text-sm text-secondary-foreground/60">
          <p>© 2024 AviOra. All rights reserved. Built for the fearless.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
