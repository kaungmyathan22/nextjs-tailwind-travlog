export function Testimonial({}) {
  return (
    <div className="relative my-16">
      <img
        src="/assets/images/bg-line.png"
        className="w-[2506.196px] h-[958.638px] opacity-10  absolute"
        alt=""
      />
      <div className="flex items-center max-w-6xl mx-auto">
        <button className="rounded-full border border-[rgba(25, 24, 37, 0.10)] p-9 bg-white">
          <img src="/assets/svgs/arrow-left.svg" alt="" />
        </button>
        <div className="flex flex-col max-w-[920px]">
          <h2 className="text-[23px] text-center font-bold uppercase text-pink tracking-4_6px">
            Testimonials
          </h2>
          <p className="text-primary text-[44px] font-bold  text-center mt-4">
            Trust our clients
          </p>
          <div className="mx-auto my-16">
            <img src="/assets/images/client.png" alt="" />
          </div>
          <p className="text-[28px] text-orange font-bold text-center">
            <span>Mark Smith</span>
            <span>/</span>
            <span className="text-primary/75">Travel Enthusias</span>
          </p>
          <div className="flex items-center mx-auto mt-8 gap-x-4">
            <img src="/assets/svgs/star2.svg" alt="" />
            <img src="/assets/svgs/star2.svg" alt="" />
            <img src="/assets/svgs/star2.svg" alt="" />
            <img src="/assets/svgs/star2.svg" alt="" />
            <img src="/assets/svgs/star2.svg" alt="" />
          </div>
          <p className="text-primary/75 text-center text-[23px] font-[450]">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC.
          </p>
        </div>
        <button className="rounded-full border border-[rgba(25, 24, 37, 0.10)] bg-violent p-9">
          <img src="/assets/svgs/arrow-right.svg" alt="" />
        </button>
      </div>
    </div>
  );
}
