const Navbar = () => {
  const navList = (
    <>
      <li>
        <a href="#nav">Home</a>
      </li>
      <li>
        <a href="#about">About Me</a>
      </li>
      <li>
        <a href="#myServices">Services</a>
      </li>
      <li>
        <a href="#skills">Skills</a>
      </li>
      <li>
        <a href="#portfolio">Portfolio</a>
      </li>
      <li>
        <a href="#contact">Contact</a>
      </li>
    </>
  );

  return (
    <div id="nav" className="bg-[#170550]">
      <div className="navbar bg-[#170550]  mx-auto h-12 fixed top-0 z-50 p-2">
        <div className="flex items-center navbar lg:max-w-7xl mx-auto justify-between h-12">
        <div className="navbar-start">
          <div className="dropdown">
            <button tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </button>
            <ul
              tabIndex={0}
              className="menu menu-sm text-white dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navList}
            </ul>
          </div>
          <a href="#nav" className="text-xl text-white font-ex2">Al Amin</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-white font-ex2 text-lg font-semibold">
            {navList}
          </ul>
        </div>
        <div className="navbar-end">
          <button className="py-1 bg-white font-ex2 text-lg font-semibold text-[#461959] px-6 rounded-3xl">
            Hire me
          </button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;



