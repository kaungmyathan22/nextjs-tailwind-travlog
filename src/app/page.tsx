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
      <div className="my-44 mt-[300px]">
        <div className="flex max-w-[1277px] mx-auto gap-x-[42px] items-center">
          <div
            className="relative"
            style={{
              background: "#FACD49",
              width: "705px",
              height: "550px",
              borderRadius: "0px 500px 500px 0px",
            }}
          >
            <img
              src="/assets/images/girl-with-luggage.png"
              alt="some girl with luggage"
              className="absolute -top-32"
            />
            <img
              className="absolute -top-3 left-[12%]"
              src="/assets/svgs/ellipse-15.svg"
              alt=""
            />
            <img
              src="/assets/svgs/ellipse-14.svg"
              alt=""
              className="absolute -top-28 right-0"
            />
            <img
              src="/assets/svgs/yellow-ellipse16.svg"
              alt=""
              className="absolute top-[15%] -right-10"
            />
            <img
              src="/assets/svgs/orange-ellipse.svg"
              alt=""
              className="right-[30%] top-[30%] absolute"
            />
            <img
              src="/assets/svgs/orange-ellipse18.svg"
              alt=""
              className="right-[15%] top-[60%] absolute"
            />
            <div
              className="bg-white flex items-center py-4 px-8 fit-content gap-x-4 absolute rounded-full -top-1 -right-11"
              style={{
                boxShadow:
                  "0px 0px 0px 0px rgba(0, 0, 0, 0.03), 0px 15px 34px 0px rgba(0, 0, 0, 0.03), 0px 62px 62px 0px rgba(0, 0, 0, 0.02), 0px 139px 83px 0px rgba(0, 0, 0, 0.01), 0px 246px 99px 0px rgba(0, 0, 0, 0.00), 0px 385px 108px 0px rgba(0, 0, 0, 0.00)",
              }}
            >
              <img src="/assets/svgs/discount.svg" alt="" />
              <p className="text-primary font-bold text-[23px]">
                Discounted Price
              </p>
            </div>
          </div>
          <div className="flex flex-col max-w-[445px] gap-y-16">
            <div className="flex flex-col gap-y-8">
              <div className="flex flex-col gap-y-4">
                <h4 className="text-pink font-bold text-[23px] tracking-4_6px">
                  Travel Point
                </h4>
                <p className="text-primary font-bold text-[44px]">
                  We helping you find your dream location
                </p>
              </div>
              <div>
                <p className="text-primary/50 font-normal text-lg">
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gird-rows-2 gap-8 relative">
              <PackageCard title="500+" subTitle="Holiday Package" />
              <PackageCard title="100" subTitle="Luxury Hotel" />
              <PackageCard title="7" subTitle="Permium Airlines" />
              <PackageCard title="2k+" subTitle="Happy Customer" />
              <div className="absolute -top-20 bg-yellow rounded-full -right-20 z-10 p-8">
                <img src="/assets/svgs/ticket-star.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function PackageCard({ title, subTitle }: any) {
  return (
    <div className="p-8 flex flex-col items-center gap-y-4 border-primary/10 rounded-[32px] border">
      <h3 className="text-orange font-bold text-[35px]">{title}</h3>
      <p className="text-primary font-normal text-base">{subTitle}</p>
    </div>
  );
}
