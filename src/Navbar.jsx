import { Outlet, Link } from "react-router-dom";

export default function Navbar({selected}) {
  return (
    <nav className="sticky top-0 bg-[#652566] text-white px-8">
      <div className="container flex justify-between items-center">
        <div className="font-heading text-[36px] font-medium">Remembering Ranie</div>
        <ul className="flex gap-40 items-center">
          <li>
            <Link to={'/'} className={selected == "home" ? "selected" : ""}>Home</Link>
          </li>
          <li>
            <Link to={`/funeral`} className={selected == "funeral" ? "selected" : ""}>Funeral Details</Link>
          </li>
          <li>
            <Link to={`/memories`} className={selected == "memories" ? "selected" : ""}>Memory Book</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
