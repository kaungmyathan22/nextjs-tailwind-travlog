import PlayLogo from "./Icons/PlayLogo";
import WorkLogo from "./Icons/WorkLogo";

export function HeroLeftSide({}) {
  return (
    <div className="flex flex-col w-[427px] gap-y-11">
      <div className="flex gap-x-4 items-center shadow-sm w-fit px-8 py-4 rounded-3xl bg-white z-10">
        <p className="text-pink text-sm font-bold">Explore the world!</p>
        <WorkLogo />
      </div>
      <div className="flex flex-col">
        <span className="text-black text-7xl font-bold">
          Travel{" "}
          <span className="text-pink">
            top
            <br /> destination
            <br />
          </span>{" "}
          of the world
        </span>
      </div>
      <div className="text-lg text-primary/50">
        We always make our customer happy by providing as many choices as
        possible{" "}
      </div>
      <div className="flex items-center gap-x-4">
        <button className="text-grey bg-violent rounded-3xl text-sm font-bold px-8 py-4">
          Get Started
        </button>
        <button className="flex items-center text-lightdark text-sm font-bold px-8 py-4 border border-grey rounded-3xl gap-x-2">
          <PlayLogo />
          <p>Watch Demo</p>
        </button>
      </div>
    </div>
  );
}
