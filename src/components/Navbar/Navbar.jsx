import { AiOutlineCaretDown } from "react-icons/ai";
import { FaSignInAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className=" w-full h-24 text-blue-400 shadow-md  flex justify-between items-center p-[1rem]">
      <div className="flex items-center justify-center">
        <Link to={"/"}>
          {" "}
          <h2 className="p-10 text-black cursor-pointer">Dogecoin</h2>
        </Link>
      </div>
      <div className="p-7 py-3">
        <ul className="flex gap-7">
          <Link to={"/"}>
            <li className=" flex items-center justify-items-center text-2xl hover:text-red-600 cursor-pointer">
              <i class="fa-solid fa-house"></i>
            </li>
            <p className="opacity-0 hover:opacity-100 hover:text-red-600">
              Home
            </p>
          </Link>
          <div className="dropdown">
            <Link to={"/about"}>
              <li className=" flex items-center justify-items-center text-2xl hover:text-red-600 cursor-pointer">
                <i class="fa-solid fa-address-card"></i>
                <AiOutlineCaretDown />
              </li>
              <p className="opacity-0 hover:opacity-100 hover:text-red-600">
                About
              </p>
            </Link>
            <div class="dropdown-content">
              <a href="3" className="hover:text-blue-600 hover:text-[1.1rem]">
                Team
              </a>
              <a href="2" className="hover:text-blue-600 hover:text-[1.1rem]">
                Careers
              </a>
              <a href="1" className="hover:text-blue-600 hover:text-[1.1rem]">
                Blog
              </a>
            </div>
          </div>
          <Link to={"/signin"}>
            <li className=" flex items-center justify-items-center text-2xl hover:text-red-600 cursor-pointer">
              <FaSignInAlt />
            </li>
            <p className="opacity-0 hover:opacity-100 hover:text-red-600">
              SignIn
            </p>
          </Link>
          <Link to={"/signin"}>
            <li className=" flex items-center justify-items-center text-2xl hover:text-red-600 cursor-pointer">
              <i class="fa-solid fa-circle-user"></i>
            </li>
            <p className="opacity-0 hover:opacity-100 hover:text-red-600">
              Login
            </p>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
