import { Outlet, Link } from "react-router-dom";

export default function Root() {
  return (
    <>
      <div id="sidebar">
        <nav>
          <ul>
            <li>
              <Link to={''}>Home</Link>
            </li>
            <li>
              <Link to={`memories`}>Memories</Link>
            </li>
            <li>
              <Link to={`funeral`}>Funeral</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail">
        <Outlet />
    </div>
    </>
  );
}
