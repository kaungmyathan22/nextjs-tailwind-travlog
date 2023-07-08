import { Clients } from "../components/Clients";
import { Destinations } from "../components/Destinations";
import { Hero } from "../components/Hero";
import { PackageSection } from "../components/PackageSection";
import { Services } from "../components/Services";
import { KeyFeatures } from "./../components/KeyFeatures";

export default function Home() {
  return (
    <main className="bg-white">
      {/* hero section */}
      <Hero />
      <Clients />
      <Services />
      <Destinations />
      <PackageSection />
      {/* key features */}
      <KeyFeatures />
    </main>
  );
}
