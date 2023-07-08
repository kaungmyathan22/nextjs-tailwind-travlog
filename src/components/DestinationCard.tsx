export function DestinationCard({ img, title, price, location, rating }: any) {
  return (
    <div className="card w-[350px] h-[350px] flex flex-col">
      <img src={img} alt={title} />
      <div
        className="flex flex-col p-8 gap-y-8 rounded-b-[32px]"
        style={{
          boxShadow:
            "0px 0px 0px 0px rgba(0, 0, 0, 0.05), 0px 32px 71px 0px rgba(0, 0, 0, 0.05), 0px 128px 128px 0px rgba(0, 0, 0, 0.04), 0px 288px 173px 0px rgba(0, 0, 0, 0.03), 0px 513px 205px 0px rgba(0, 0, 0, 0.01), 0px 801px 224px 0px rgba(0, 0, 0, 0.00)",
        }}
      >
        <div className="flex flex-col gap-y-4">
          <div className="flex">
            <h5 className="font-bold text-primary text-[23px] flex-1">
              {title}
            </h5>
            <h6 className="text-pink font-bold text-[23px]">{price}</h6>
          </div>
          <p className="text-primary/75 font-normal text-lg">{location}</p>
        </div>
        <div className="flex gap-x-2">
          <p className="text-[23px] text-orange font-bold">{rating}</p>
          <img src="/assets/svgs/star.svg" />
        </div>
      </div>
    </div>
  );
}
