import React from "react";
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";

export default function Navbar({ theme, settheme }) {
  return (
    <nav className={`w-full ${theme === 'dark' ? 'bg-dark text-white' : ''} duration-300`}>
      <div className="container">
        <div className="flex items-center h-20">
          <div className="logo">
            <h1 className="text-3xl font-bold">Car Rent</h1>
          </div>
          <div className="m-auto hidden md:block">
            <ul className="flex items-center gap-8 ">
              <li>
                <p
                  className={`inline-block Navlink text-decoration-none py-3 text-lg hover:text-primary hover:border-b-2 hover:border-primary transition-colors duration-500 text-lg font-medium`}
                >
                  Home
                </p>
              </li>
              <li>
                <p
                  className={`inline-block Navlink text-decoration-none py-3 text-lg hover:text-primary hover:border-b-2 hover:border-primary transition-colors duration-500 text-lg font-medium`}
                >
                  Car
                </p>
              </li>
              <li>
                <p
                  className={`inline-block Navlink text-decoration-none py-3 text-lg hover:text-primary hover:border-b-2 hover:border-primary transition-colors duration-500 text-lg font-medium`}
                >
                  Service
                </p>
              </li>
              <li>
                <p
                  className={`inline-block Navlink text-decoration-none py-3 text-lg hover:text-primary hover:border-b-2 hover:border-primary transition-colors duration-500 text-lg font-medium`}
                >
                  Booking
                </p>
              </li>
            </ul>
          </div>
          {theme === "dark" ? (
            <BiSolidSun
              className="text-2xl"
              onClick={() => settheme("light")}
            />
          ) : (
            <BiSolidMoon
              onClick={() => settheme("dark")}
              className="text-2xl"
            />
          )}
        </div>
      </div>
    </nav>
  );
}
