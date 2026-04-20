import { Navigation } from "@/components/wedding/Navigation";
import { Hero } from "@/components/wedding/Hero";
import { Story } from "@/components/wedding/Story";
import { Events } from "@/components/wedding/Events";
import { Gallery } from "@/components/wedding/Gallery";
import { Location } from "@/components/wedding/Location";
import { RSVP } from "@/components/wedding/RSVP";
import { Footer } from "@/components/wedding/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Story />
      <Events />
      <Gallery />
      <Location />
      <RSVP />
      <Footer />
    </main>
  );
};

export default Index;
