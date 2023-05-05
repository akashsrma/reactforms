import {AiOutlineCaretDown} from 'react-icons/ai' 

import { Link } from "react-router-dom";


const Navbar = ()=>{
    return (
      <nav className=" w-full h-24 text-blue-400 shadow-md  flex justify-between items-center p-[1rem]">
        <div className="flex items-center justify-center">
          <Link to={"/"}>
            {" "}
            <h2 className="p-10 text-black cursor-pointer">Dogecoin</h2>
          </Link>
        </div>
        <div>
          <ul className="flex gap-7">
            <Link to={"/"}><li className=" flex items-center justify-items-center text-2xl hover:text-red-600 cursor-pointer">Home</li></Link>
            <div className="dropdown">
              <Link to={"/about"}>
                <li className=" flex items-center justify-items-center text-2xl hover:text-red-600 cursor-pointer">
                  About
                  <AiOutlineCaretDown />
                </li>
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
            <Link to={"/contact"}><li className="text-2xl hover:text-red-600">Contact Us</li></Link>
            <button className="bg-blue-950 px-5 text-white text-lg py-1">
              Sign in
            </button>
          </ul>
        </div>
      </nav>
    );
};

export default Navbar;