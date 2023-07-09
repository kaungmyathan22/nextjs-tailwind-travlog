import { Clients } from "../components/Clients";
import { Destinations } from "../components/Destinations";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { PackageSection } from "../components/PackageSection";
import { Services } from "../components/Services";
import { KeyFeatures } from "./../components/KeyFeatures";
import { NewSletter } from "./../components/NewSletter";
import { Testimonial } from './../components/Testimonial';

export default function Home() {
  return (
    <main className="bg-white">
      {/* hero section */}
      <Hero />
      <Clients />
      <Services />
      <Destinations />
      <PackageSection />
      <KeyFeatures />
      {/* testimonial */}
      <Testimonial     />
      {/* newsletter */}
      <NewSletter />
      <Footer />
    </main>
  );
}
