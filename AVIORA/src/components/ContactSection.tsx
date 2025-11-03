import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready for Your Adventure?</h2>
          <p className="text-muted-foreground text-lg">
            Get in touch with us to book your next thrilling experience
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="border-none shadow-lg text-center">
            <CardContent className="pt-6">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Email Us</h3>
              <a href="mailto:hello@aviora.com" className="text-primary hover:underline">
                hello@aviora.com
              </a>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg text-center">
            <CardContent className="pt-6">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Call Us</h3>
              <a href="tel:+911234567890" className="text-primary hover:underline">
                +91 123 456 7890
              </a>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg text-center">
            <CardContent className="pt-6">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Visit Us</h3>
              <p className="text-muted-foreground text-sm">
                Manali, Himachal Pradesh
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button size="lg" className="text-lg px-8">
            Book Your Adventure Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
