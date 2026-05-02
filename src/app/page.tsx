import { Nav } from "@/components/sections/Nav";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { EditorialDivider } from "@/components/sections/EditorialDivider";
import { Projects } from "@/components/sections/Projects";
import { Process } from "@/components/sections/Process";
import { Benefits } from "@/components/sections/Benefits";
import { TechStack } from "@/components/sections/TechStack";
import { Team } from "@/components/sections/Team";
import { Testimonials } from "@/components/sections/Testimonials";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";
import { ChatButton } from "@/components/chat/ChatButton";

export default function Home() {
  return (
    <main id="top" className="flex flex-col flex-1 bg-paper text-ink overflow-x-clip">
      <Nav />
      <Hero />
      <Services />
      <EditorialDivider />
      <Projects />
      <Process />
      <Benefits />
      <TechStack />
      <Team />
      <Testimonials />
      <FinalCTA />
      <Footer />
      <ChatButton />
    </main>
  );
}
