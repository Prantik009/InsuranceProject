import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/TRUECOVER_FULL_LOGO.webp";
import { ChevronDown, Phone } from "lucide-react";
import { useState } from "react";
import { Fade as Hamburger } from "hamburger-react";
import { container, subcontainer } from "../assets/dummy";

const Navbar = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [isOpen, setOpen] = useState(false);

  const navLinkClass = "cursor-pointer hover:text-stone-50";

  const handleLinkClick = () => {
    setShowModal(false);
    setOpen(false);
  };

  return (
    <header className={`sticky top-0 z-50 ${container}`}>
      <div className={subcontainer}>
        
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate("/")}>
          <img src={logo} alt="Logo" className="h-13 md:h-12" />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:block px-4 py-3 bg-gradient-to-br from-stone-400 to-stone-900 rounded-4xl text-sm text-stone-200 border border-stone-600 backdrop-blur-md shadow-sm relative">
          <ul className="flex gap-10 items-center">
            <li className={`${navLinkClass} flex items-center gap-0.5`} onClick={() => setShowModal(!showModal)}>
              General Insurance <ChevronDown className="h-5 w-5 mt-1" />
            </li>
            <li className={navLinkClass}><Link to="/life">Life Insurance</Link></li>
            <li className={navLinkClass}><Link to="/claims">Claims</Link></li>
            {/* <li className={navLinkClass}><Link to="/about">About us</Link></li> */}
          </ul>

          {/* Dropdown Menu */}
          {showModal && (
            <div className="absolute mt-4 w-[250px] py-2 px-4 bg-stone-600 rounded-sm text-xs text-stone-200">
              <ul className="flex flex-col gap-2">
                <li className={navLinkClass}><Link to="/car" onClick={handleLinkClick}>Car Insurance</Link></li>
                <li className={navLinkClass}><Link to="/bike" onClick={handleLinkClick}>Bike Insurance</Link></li>
                <li className={navLinkClass}><Link to="/home" onClick={handleLinkClick}>Home Insurance</Link></li>
                <li className={navLinkClass}><Link to="/health" onClick={handleLinkClick}>Health Insurance</Link></li>
                <li className={navLinkClass}><Link to="/comm" onClick={handleLinkClick}>Commercial Vehicle</Link></li>
                <li className={navLinkClass}><Link to="/fire" onClick={handleLinkClick}>Fire Insurance</Link></li>
                <li className={navLinkClass}><Link to="/pet" onClick={handleLinkClick}>Pet Insurance</Link></li>
              </ul>
            </div>
          )}
        </div>

        {/* Support Phone */}
        <div className="hidden md:flex items-center gap-2 text-stone-200">
          <span className="rounded-full p-1.5 md:p-2.5 bg-stone-700 mt-1"><Phone className="h-4 w-4" /></span>
          <span className="text-sm md:text-xl">(+91) 97175-20476</span>
        </div>

        {/* Mobile Menu Button */}
        <div className="block md:hidden text-white relative">
          <Hamburger toggled={isOpen} toggle={setOpen} rounded />
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="absolute top-full left-0 h-screen w-full bg-stone-800 text-stone-200 flex flex-col px-4 py-3 z-50 gap-4">
            <Link to="/car" onClick={handleLinkClick}>Car Insurance</Link>
            <Link to="/bike" onClick={handleLinkClick}>Bike Insurance</Link>
            <Link to="/car" onClick={handleLinkClick}>Commercial Vehicle Insurance</Link>
            <Link to="/health" onClick={handleLinkClick}>Health Insurance</Link>
            <Link to="/life" onClick={handleLinkClick}>Term Life Insurance</Link>
            <Link to="/home" onClick={handleLinkClick}>Home Insurance</Link>
            <Link to="/fire" onClick={handleLinkClick}>Fire Insurance</Link>
            <Link to="/pet" onClick={handleLinkClick}>Pet Insurance</Link>
            <Link to="/about" onClick={handleLinkClick}>About us</Link>
            <Link to="/contact" onClick={handleLinkClick}>Contact us</Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
