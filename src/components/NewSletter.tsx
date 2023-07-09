export function NewSletter({}) {
  return (
    <div className="max-w-[1110px] mx-auto py-32 px-16 bg-[#facd4914] mt-64 flex flex-col gap-y-16 relative">
      <img
        src="/assets/images/newsletter-graphics.png"
        className="w-[183px] h-[176px] absolute -top-10 -left-20"
        alt=""
      />
      <div className="flex flex-col gap-y-8">
        <h4 className="text-pink uppercase font-bold text-[23px] .tracking-4_6px text-center">
          subscribe to our newsletter
        </h4>
        <p className="text-primary font-bold text-[55px] text-center">
          Prepare yourself & let’s explore the beauty of the world
        </p>
      </div>
      <div className="flex items-center gap-x-16 ">
        <div className="flex items-center flex-1 p-8 bg-white gap-x-4">
          <img src="/assets/svgs/message.svg" alt="message" />
          <input
            type="text"
            placeholder="Your Email"
            className="text-[23px] font-bold placeholder:text-primary text-primary flex-1 outline-none"
          />
        </div>
        <button className="py-8 px-16 rounded-[32px] bg-violent">
          <p className="text-white font-bold text-[23px]">Subscribe</p>
        </button>
      </div>
    </div>
  );
}
