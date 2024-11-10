import { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import HamburgerImage from "./ham.png";

export default function Navbar({ selected }) {
  const [open, setOpen] = useState("");

  function openHamburger() {
    setOpen(true);
  }

  function closeHamburger() {
    setOpen(false);
  }

  return (
    <nav className="sticky top-0 bg-[#652566] text-white px-8">
      <div className="container flex justify-between items-center">
        <div className="font-heading text-[36px] font-medium">
          Remembering Ranie
        </div>
        <div className="block md:hidden p-8" onClick={openHamburger}>
          <img src={HamburgerImage} className="h-[15px]" />
        </div>
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
      {open ? (
        <div className="fixed z-[10] inset-0 bg-[#652566] text-white">
          <div className="py-32 px-[5%]">
            <div className="font-heading text-[40px] font-medium">
              Remembering Ranie
            </div>
            <ul className="list-disc pl-20">
              <li>
                <Link to={"/"} className={selected == "home" ? "selected" : ""}>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to={`/funeral`}
                  className={selected == "funeral" ? "selected" : ""}
                >
                  Funeral Details
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
            <button
              className="btn !bg-gray-200 !text-black mt-32 !text-18"
              onClick={closeHamburger}
            >
              Close Menu
            </button>
          </div>
        </div>
      ) : null}
    </nav>
  );
}
