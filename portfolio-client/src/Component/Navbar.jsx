const Navbar = () => {
  const navList = (
    <>
      <li>
        <a>Home</a>
      </li>
      <li>
        <a>About Me</a>
      </li>
      <li>
        <a>Services</a>
      </li>
      <li>
        <a>Skills</a>
      </li>
      <li>
        <a>Portfolio</a>
      </li>
      <li>
        <a>Contact</a>
      </li>
    </>
  );

  return (
    <div className="bg-[#170550]">
      <div className="lg:max-w-7xl lg:mx-auto ">
      <div className="navbar  bg-[#170550] lg:px-20 h-12 fixed top-0 left-0 right-0 z-50 p-2">
        <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm text-white dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navList}
            </ul>
          </div>
          <h2 className="text-xl text-white font-ex2">Al Amin</h2>
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
