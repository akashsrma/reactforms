const Navbar = ()=>{
    return (
      <nav className=" w-full h-24 text-blue-400 shadow-md  flex justify-between items-center p-[1rem]">
        <div className="flex items-center justify-center">
          <h2 className="p-10  text-black cursor-pointer">Dogecoin</h2>
        </div>
        <div>
          <ul className="flex gap-7">
            <div className="dropdown">
              <li className="text-2xl hover:text-red-600 cursor-pointer">About</li>
              <div class="dropdown-content">
                <a href="3" className="hover:text-blue-600">Team</a>
                <a href="2"  className="hover:text-blue-600" >Careers</a>
                <a href="1"  className="hover:text-blue-600">Blog</a>
              </div>
            </div>
            <li className="text-2xl hover:text-red-600">Contact Us</li>
            <button className="bg-blue-950 px-5 text-white text-lg py-1">
              Sign in
            </button>
          </ul>
        </div>
      </nav>
    );
};

export default Navbar;