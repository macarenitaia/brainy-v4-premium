import Hero from "@/components/sections/Hero";
import ServiceTabs from "@/components/sections/ServiceTabs";
import HowWeWork from "@/components/sections/HowWeWork";
import TechStack from "@/components/sections/TechStack";
import Sectors from '@/components/sections/Sectors';
import TheConflict from '@/components/sections/TheConflict';
import ClosingCTA from '@/components/sections/ClosingCTA';
import TheHub from '@/components/sections/TheHub';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-neon-lime selection:text-black">
      <Hero />

      <div id="conflicto">
        <TheConflict />
      </div>

      <div id="servicios">
        <ServiceTabs />
      </div>

      <div id="proceso">
        <HowWeWork />
      </div>

      <div id="sectores">
        <Sectors />
      </div>

      <TheHub />

      <TechStack />

      <div id="contacto">
        <ClosingCTA />
      </div>
    </main >
  );
}
