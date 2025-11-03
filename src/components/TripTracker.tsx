import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Clock, Users } from "lucide-react";
import { useGeolocation } from "@/hooks/useGeolocation";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface Trip {
  id: string;
  adventure: string;
  location: string;
  date: string;
  time: string;
  status: "upcoming" | "ongoing" | "completed";
  groupSize: number;
}

const TripTracker = () => {
  const { position, error } = useGeolocation(false);
  const [trips, setTrips] = useState<Trip[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const fetchBookings = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        setLoading(false);
        return;
      }

      const { data, error } = await supabase
        .from('bookings')
        .select(`
          id,
          booking_date,
          booking_time,
          participants,
          status,
          adventures (
            name,
            locations (
              name,
              state
            )
          )
        `)
        .eq('user_id', user.id)
        .order('booking_date', { ascending: true });

      if (error) {
        toast({
          title: "Error loading trips",
          description: error.message,
          variant: "destructive",
        });
      } else if (data) {
        setTrips(data.map((booking: any) => ({
          id: booking.id,
          adventure: booking.adventures?.name || "Adventure",
          location: booking.adventures?.locations 
            ? `${booking.adventures.locations.name}, ${booking.adventures.locations.state}`
            : "Location TBD",
          date: booking.booking_date,
          time: booking.booking_time,
          status: booking.status,
          groupSize: booking.participants
        })));
      }
      
      setLoading(false);
    };

    fetchBookings();
  }, [toast]);

  const getStatusColor = (status: Trip["status"]) => {
    switch (status) {
      case "upcoming":
        return "bg-sky-500";
      case "ongoing":
        return "bg-green-500";
      case "completed":
        return "bg-gray-500";
    }
  };

  return (
    <div className="space-y-6 p-4 md:p-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">My Trips</h1>
        <p className="text-muted-foreground">Track your adventure bookings</p>
      </div>

      {error && (
        <Card className="p-4 bg-destructive/10">
          <p className="text-sm text-destructive">Location: {error}</p>
        </Card>
      )}

      {loading ? (
        <Card className="p-6">
          <p className="text-center text-muted-foreground">Loading your trips...</p>
        </Card>
      ) : trips.length === 0 ? (
        <Card className="p-6">
          <p className="text-center text-muted-foreground">No trips booked yet. Book your first adventure!</p>
        </Card>
      ) : (
        <div className="space-y-4">
          {trips.map((trip) => (
          <Card key={trip.id} className="p-6 hover:shadow-elegant transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold mb-1">{trip.adventure}</h3>
                <p className="text-sm text-muted-foreground flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  {trip.location}
                </p>
              </div>
              <Badge className={getStatusColor(trip.status)}>
                {trip.status}
              </Badge>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center gap-2 text-sm">
                <Calendar className="w-4 h-4 text-primary" />
                <span>{new Date(trip.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Clock className="w-4 h-4 text-primary" />
                <span>{trip.time}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Users className="w-4 h-4 text-primary" />
                <span>{trip.groupSize} people</span>
              </div>
              {position && (
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="w-4 h-4 text-green-500" />
                  <span>Location tracked</span>
                </div>
              )}
            </div>

            <div className="flex gap-3">
              <Button variant="default" className="flex-1">
                View Details
              </Button>
              {trip.status === "upcoming" && (
                <Button variant="outline" className="flex-1">
                  Get Directions
                </Button>
              )}
            </div>
          </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default TripTracker;
