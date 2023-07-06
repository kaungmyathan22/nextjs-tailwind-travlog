import Logo from "./Icons/Logo";

const Navbar = () => {
  return (
    <div className="max-w-6xl mx-auto py-8 flex justify-between">
      <div className="flex gap-x-4 items-center">
        <Logo />
        <p className="font-black text-2xl text-primary">Travlog</p>
      </div>
      <ul className="flex items-center gap-x-16 text-primary/50 font-bold text-sm">
        <li>Home</li>
        <li>Discover</li>
        <li>Special Deals</li>
        <li>Contact</li>
      </ul>
      <ul className="flex items-center ">
        <li className="text-[#222831] text-sm font-bold px-8 py-4">Log In</li>
        <li className="text-grey bg-violent rounded-3xl text-sm font-bold px-8 py-4">
          Sign Up
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
