export function KeyFeatures({}) {
  return (
    <div className="keyfeatures max-w-6xl flex mx-auto gap-x-[42px]">
      <div className="w-[540px] flex flex-col gap-y-4">
        <h6 className="text-pink text-[23px] font-bold uppercase tracking-4_6px">
          Key features
        </h6>
        <h4 className="text-primary text-[44px] font-bold">
          We offer best services
        </h4>
        <p className="mt-8 text-primary/50 font-normal text-lg">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC.
        </p>
        <div className="flex flex-col mt-16">
          <FeatureCard
            img="/assets/svgs/location2.svg"
            title="We offer best services"
            subTitle="Lorem Ipsum is not simply random text"
          />
          <FeatureCard
            img="/assets/svgs/calendar1.svg"
            title="Schedule your trip"
            subTitle="It has roots in a piece of classical"
            className="bg-yellow"
            border={true}
          />
          <FeatureCard
            img="/assets/svgs/ticket1.svg"
            title="Get discounted coupons"
            subTitle="Lorem Ipsum is not simply random text"
            className="bg-pink"
          />
        </div>
      </div>
      <div className="relative flex-1 flex flex-col">
        <img
          src="/assets/images/background.png"
          alt=""
          className="absolute -right-32"
        />
        <div className="relative">
          <img src="/assets/images/Rectangle9.png" alt="" />
          <img
            src="/assets/images/Rectangle10.png"
            alt=""
            className="absolute top-[40%] -right-20"
          />
        </div>
      </div>
    </div>
  );
}

function FeatureCard({
  img,
  title,
  subTitle,
  className = "bg-orange",
  border = false,
}: any) {
  return (
    <div
      className={`p-8 flex gap-x-8 items-center ${
        border ? "border border-primary/10" : ""
      } rounded-[32px]`}
    >
      <div className={` ${className} w-fit p-[26px] rounded-[32px]`}>
        <img src={img} alt="" />
      </div>
      <div className="flex flex-col gap-y-2">
        <h4 className="text-primary text-[23px] font-bold">{title}</h4>
        <p className="text-primary/50 text-lg font-normal">{subTitle}</p>
      </div>
    </div>
  );
}
