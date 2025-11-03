import Navbar from "@/components/Navbar";
import TripTracker from "@/components/TripTracker";
import Footer from "@/components/Footer";

const Trips = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        <TripTracker />
      </div>
      <Footer />
    </div>
  );
};

export default Trips;
