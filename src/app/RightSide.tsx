import AddUserIcon from "@/components/Icons/AddUserIcon";
import AirplaneDown from "@/components/Icons/AirplaneDown";
import AirplaneTopLeft from "@/components/Icons/AirplaneTopLeft";
import AirplaneTopRight from "@/components/Icons/AirplaneTopRight";
import BottomLeftTopDottedLine from "@/components/Icons/BottomLeftTopDottedLine";
import BottomRightTopDottedLine from "@/components/Icons/BottomRightTopDottedLine";
import GlobeLogo from "@/components/Icons/Globe";
import LocationIcon from "@/components/Icons/LocationIcon";
import SendIcon from "@/components/Icons/SendIcon";
import RightBottomDottedLine from "@/components/Icons/TopRightBottomDottedLine";
import Image from "next/image";

export function RightSide({}) {
  return (
    <div className="flex-1 relative">
      <div className="absolute left-0 top-0 w-full flex justify-center ">
        <GlobeLogo />
      </div>
      <div className="flex justify-center absolute top-0">
        <div className="flex-1 flex flex-col items-center">
          <div>
            <AirplaneTopLeft />
          </div>
          <BottomLeftTopDottedLine />
        </div>
        <div className="flex-1 flex flex-col -mt-6 relative">
          <RightBottomDottedLine />
          <div className="absolute right-[20%] bottom-[30%]">
            <AirplaneDown />
          </div>
        </div>
        <div className="flex-1 flex">
          <AirplaneTopRight />
          <div className="mt-5">
            <BottomRightTopDottedLine />
          </div>
        </div>
      </div>
      <div className="flex justify-end items-stretch z-10 absolute top-0 left-0 right-0 gap-x-8">
        {/* left side image */}
        <div className="flex flex-col gap-y-8">
          <div className="relative">
            <Image
              alt="greece"
              src="/assets/images/hero-img-1.png"
              height={300}
              width={272}
            />
            <div className="absolute -bottom-10 -left-10 bg-pink rounded-full p-4">
              <SendIcon />
            </div>
          </div>
          <Image
            alt="greece"
            src="/assets/images/hero-img-2.png"
            height={300}
            width={272}
          />
        </div>
        {/* right side image */}
        <div className="flex justify-center flex-col relative ">
          <div className="relative">
            <Image
              alt="greece"
              src="/assets/images/hero-img-3.png"
              height={400}
              width={272}
            />
            <div className="bg-white px-8 py-4 flex items-center gap-x-2 absolute -right-20 bottom-[10%] rounded-full">
              <LocationIcon />
              <p className="text-sm font-bold">Top Places</p>
            </div>
          </div>
          <div className="bg-orange absolute w-fit bottom-0 right-[50%] translate-x-[50%] rounded-full p-4">
            <AddUserIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
