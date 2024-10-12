import { Link } from "react-scroll";


const Navbar = () => {
  return (
    <div className="flex items-center justify-between h-[80px] px-[100px]">
      {/* `Logo */}
      <img
        src="/logo_hero_horizontal.svg"
        alt=""
        height={200}
        width={200}
        className="cursor-pointer"
      />

      {/* Navigation Links */}
      <div className="flex items-center justify-evenly cursor-pointer">
        <Link to="hero" smooth={true} duration={1000} className="mr-5 text-[18px] font-medium">Home</Link>
        <Link to="featured" smooth={true} duration={1000} className="mr-5 text-[18px] font-medium">About Us</Link>
        <Link to="contact" smooth={true} duration={1000} className="mr-5 text-[18px] font-medium">Contact Us</Link>
      </div>
    </div>
  );
};

export default Navbar;