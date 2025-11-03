import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bell, BellOff } from "lucide-react";
import { usePushNotifications } from "@/hooks/usePushNotifications";
import { toast } from "@/hooks/use-toast";

const Notifications = () => {
  const { token } = usePushNotifications();

  useEffect(() => {
    if (token) {
      toast({
        title: "Push Notifications Enabled",
        description: "You'll receive updates about your trips",
      });
    }
  }, [token]);

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-16 p-4 md:p-8 container mx-auto">
        <div className="max-w-2xl mx-auto space-y-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">Notifications</h1>
            <p className="text-muted-foreground">
              Stay updated about your adventures
            </p>
          </div>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <Bell className="w-6 h-6 text-primary" />
                <div>
                  <h3 className="font-bold">Push Notifications</h3>
                  <p className="text-sm text-muted-foreground">
                    {token ? "Enabled" : "Disabled"}
                  </p>
                </div>
              </div>
              {token ? (
                <BellOff className="w-5 h-5 text-green-500" />
              ) : (
                <BellOff className="w-5 h-5 text-gray-400" />
              )}
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-between py-2 border-b">
                <span>Trip reminders</span>
                <span className="text-primary font-medium">Active</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b">
                <span>Weather alerts</span>
                <span className="text-primary font-medium">Active</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b">
                <span>Safety updates</span>
                <span className="text-primary font-medium">Active</span>
              </div>
              <div className="flex items-center justify-between py-2">
                <span>Special offers</span>
                <span className="text-primary font-medium">Active</span>
              </div>
            </div>

            <Button variant="outline" className="w-full mt-6">
              Manage Preferences
            </Button>
          </Card>

          {token && (
            <Card className="p-4 bg-primary/5">
              <p className="text-xs text-muted-foreground">
                Device Token: {token.substring(0, 20)}...
              </p>
            </Card>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Notifications;
