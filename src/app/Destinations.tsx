import { DestinationCard } from "./DestinationCard";

export function Destinations({}) {
  return (
    <div className="pb-32 km-container flex flex-col">
      {/* header section */}
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-y-4 py-16">
          <h5 className="uppercase text-pink font-bold tracking-4_6px">
            top destination
          </h5>
          <h1 className="text-primary text-5_5xl font-bold">
            Explore top destination
          </h1>
        </div>
        <div className="flex gap-x-8 items-center">
          <button className="rounded-full border border-[rgba(25, 24, 37, 0.10)] p-9">
            <img src="/assets/svgs/arrow-left.svg" alt="" />
          </button>
          <button className="rounded-full border border-[rgba(25, 24, 37, 0.10)] bg-violent p-9">
            <img src="/assets/svgs/arrow-right.svg" alt="" />
          </button>
        </div>
      </div>
      {/* travel card section */}
      <div className="flex gap-x-8">
        <DestinationCard
          title="Paradise Beach, Bantayan Island"
          price="$550.16"
          location="Rome, Italy"
          rating="4.8"
          img="/assets/images/explore-dest-1.png"
        />
        <DestinationCard
          title="Paradise Beach, Bantayan Island"
          price="$550.16"
          location="Rome, Italy"
          rating="4.8"
          img="/assets/images/explore-dest-2.png"
        />
        <DestinationCard
          title="Paradise Beach, Bantayan Island"
          price="$550.16"
          location="Rome, Italy"
          rating="4.8"
          img="/assets/images/explore-dest-3.png"
        />
      </div>
    </div>
  );
}
