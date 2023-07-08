import Logo from "@/components/Icons/Logo";
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
      <KeyFeatures />
      <Footer />
    </main>
  );
}

function Footer({}) {
  return (
    <footer className="max-w-[1100px] mx-auto flex mb-[86px] mt-[128px] gap-x-[153px]">
      <div className="flex flex-col w-[278px] gap-y-8">
        <div className="flex items-center gap-x-4">
          <Logo />
          <h3 className="text-2xl text-primary font-extrabold">Travlog</h3>
        </div>
        <p className="text-[23px] text-primary/50 font-normal text-justify">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC.
        </p>
        <div className="flex items-center gap-x-8">
          <img src="/assets/svgs/fb.svg" alt="" />
          <img src="/assets/svgs/twitter.svg" alt="" />
          <img src="/assets/svgs/insta.svg" alt="" />
        </div>
      </div>
      <div className="flex items-start gap-x-[115px] ">
        <FooterColumn title="Company" items={["About", "Career", "Mobile"]} />
        <FooterColumn
          title="Contact Us"
          items={["Why Travlog", "Partner with us", "FAQ's", "Blog"]}
        />
        <FooterColumn
          title="Meet Us"
          items={[
            "+00 92 1234 56789",
            "info@travlog.com",
            "205. R Street, New York",
            "BD23200",
          ]}
        />
      </div>
    </footer>
  );
}

function FooterColumn({ title = "", items = [] }: any) {
  return (
    <div className="flex flex-col gap-y-8">
      <h3 className="text-primary font-bold text-[23px]">{title}</h3>
      <ul className="flex flex-col gap-y-8 text-lg text-primary/75 font-normal">
        {items.map((item: string) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
