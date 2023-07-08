import { HeroLeftSide } from "@/components/HeroLeftSide";
import { RightSide } from "../components/RightSide";

export function Hero({}) {
  return (
    <div className="flex max-w-[1119px] mx-auto relative">
      {/* blur circle */}
      <div className="w-[500px] h-[500px] bg-orange/50 blur-[250px] rounded-full absolute -top-[450px] -left-[288px]"></div>
      <HeroLeftSide />
      <RightSide />
    </div>
  );
}
