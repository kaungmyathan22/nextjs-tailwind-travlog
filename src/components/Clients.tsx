export function Clients({}) {
  return (
    <div className="w-full mt-28 relative">
      {/*   */}
      <div className="w-[500px] h-[500px] bg-[#FACD49]/50 blur-[250px] rounded-full absolute -top-[50%] -right-[288px]"></div>
      <div className="flex items-center max-w-[1110px] mx-auto justify-between py-16 relative ">
        <img src="/assets/svgs/tripadvisor.svg" alt="trip advisor" />
        <img src="/assets/svgs/Expedia.svg" alt="expedia" />
        <img src="/assets/svgs/bookingcom.svg" alt="Booking.com" />
        <img src="/assets/svgs/airbnb.svg" alt="Airbnb" />
        <img src="/assets/svgs/rbitz.svg" alt="Rbitz" />
      </div>
      <div className="absolute left-5 -top-24">
        <img src="/assets/svgs/objects.svg" alt="Objects" />
      </div>
    </div>
  );
}
