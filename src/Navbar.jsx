import { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import HamburgerImage from "./ham.png";

export default function Navbar({ selected }) {
  return (
    <nav className="sticky top-0 bg-[#652566] text-white px-8">
      <div className="container flex justify-between items-center">
        <Link to={"/"} className="font-heading text-[36px] font-medium">
          Remembering Ranie
        </Link>
        <ul className="gap-40 items-center hidden md:flex">
          <li>
            <Link to={"/"} className={selected == "home" ? "selected" : ""}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to={`/memories`}
              className={selected == "memories" ? "selected" : ""}
            >
              Memory Book
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
