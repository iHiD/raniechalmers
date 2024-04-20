import { Outlet, Link } from "react-router-dom";

export default function Root() {
  return (
    <div className="flex items-start">
      <nav className="w-[300px] bg-gray-100 sticky top-0 h-[100vh]">
        <ul>
          <li>
            <Link to={''}>Home</Link>
          </li>
          <li>
            <Link to={`funeral`}>Funeral Details</Link>
          </li>
          <li>
            <Link to={`memories`}>Memories</Link>
          </li>
        </ul>
      </nav>
      <main className="h-[5000px] flex-grow">
        <Outlet />
      </main>
    </div>
  );
}
