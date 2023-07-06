import { Clients } from "./Clients";
import { Hero } from "./Hero";

export default function Home() {
  return (
    <main className="bg-white">
      {/* hero section */}
      <Hero />
      <Clients />
      <div className="h-screen w-full mt-16">
        <div className="max-w-[1110px] mx-auto">
          <div className="flex items-center">
            <div className="flex flex-col flex-1 gap-y-4 min-w-[444px]">
              <h4 className="uppercase text-2xl tracking-[0.29rem] text-pink">
                Services
              </h4>
              <p className="text-[44px] text-primary font-bold">
                Our top value
                <br /> categories for you
              </p>
            </div>
            <div className="flex items-center w-[calc(100% - 444px)] gap-x-[21px]">
              <div className="flex flex-col min-w-[350px] p-16 items-center rounded-[32px] bg-white">
                <img src="/assets/images/destination.png" alt="Destination" />
                <h4 className="text-primary text-[28px] font-bold text-center mt-16">
                  Best Tour Guide
                </h4>
                <p className="text-[#19182580] text-center text-lg font-normal mt-8">
                  What looked like a small patch of purple grass, above five
                  feet.
                </p>
              </div>
              <div
                style={{
                  boxShadow:
                    "0px 0px 0px 0px rgba(0, 0, 0, 0.10), 0px 41px 89px 0px rgba(0, 0, 0, 0.10)",
                }}
                className="flex flex-col w-[350px] p-16 items-center rounded-[32px] bg-white min-w-[350px]"
              >
                <img src="/assets/images/booking.png" alt="Destination" />
                <h4 className="text-primary text-[28px] font-bold text-center mt-16">
                  Easy Booking
                </h4>
                <p className="text-[#19182580] text-center text-lg font-normal mt-8">
                  Square, was moving across the sand in their direction.
                </p>
              </div>
              <div
                style={{
                  boxShadow:
                    "0px 0px 0px 0px rgba(0, 0, 0, 0.10), 0px 41px 89px 0px rgba(0, 0, 0, 0.10)",
                }}
                className="flex flex-col w-[350px] p-16 items-center rounded-[32px] bg-white min-w-[350px]"
              >
                <img src="/assets/images/booking.png" alt="Destination" />
                <h4 className="text-primary text-[28px] font-bold text-center mt-16">
                  Easy Booking
                </h4>
                <p className="text-[#19182580] text-center text-lg font-normal mt-8">
                  Square, was moving across the sand in their direction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
