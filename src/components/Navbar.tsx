import React from "react";
import LogoIcon from "./icons/Logo";
import MenuIcon from "./icons/Menu";
import Search from "./icons/Search";

const MENUS = [`Find A Match`, `Dog's Persoonality`, `Aboout Us`, `Contact Us`];

const Navbar = () => {
  const [toggle, setToggle] = React.useState(false);

  return (
    <nav className="h-16 p-4 border-b border-gray-100 shadow-sm">
      <div className="container flex items-center justify-between mx-auto ">
        <div className="relative h-8">
          <LogoIcon />
        </div>
        <div
          className="relative items-center hidden sm:flex"
          role="menu"
          aria-orientation="horizontal"
          aria-labelledby="user-menu-button"
        >
          {MENUS.map((menu) => (
            <a
              href={`#${menu}`}
              className="inline-block mr-3 text-sm text-gray-600 transition hover:text-gray-800"
            >
              {menu}
            </a>
          ))}
          <a
            href="#menu-5"
            className="inline-block w-4 h-4 mr-3 text-sm text-gray-600 transition hover:text-gray-800"
          >
            <Search />
          </a>
        </div>
        <div className="relative block sm:hidden">
          <div className="cursor-pointer" onClick={() => setToggle(!toggle)}>
            <MenuIcon />
          </div>
          {toggle && (
            <div
              className="absolute right-0 z-10 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="user-menu-button"
              tabIndex={1}
            >
              {MENUS.map((menu) => (
                <a
                  key={menu}
                  href={`#${menu}`}
                  className="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                >
                  {menu}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
