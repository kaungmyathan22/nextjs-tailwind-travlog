import { Clients } from "./Clients";
import { Destinations } from "./Destinations";
import { Hero } from "./Hero";
import { Services } from "./Services";

export default function Home() {
  return (
    <main className="bg-white">
      {/* hero section */}
      <Hero />
      <Clients />
      <Services />
      <Destinations />
      <div className="h-screen mt-32"></div>
    </main>
  );
}
