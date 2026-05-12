import { Link } from "react-router-dom";

export default function Sidebar() {

  return (

    <aside className="sidebar">

      <div>

        <h1 className="logo">
          CRM Pro
        </h1>

        <ul className="menu">

          <li>
            <Link to="/">
              Dashboard
            </Link>
          </li>

          <li>
            <Link to="/analytics">
              Analytics
            </Link>
          </li>

          <li>
            <Link to="/clients">
              Clients
            </Link>
          </li>

          <li>
            <Link to="/reports">
              Reports
            </Link>
          </li>
          <li>
  <Link to="/tasks">
    Tasks
  </Link>
</li>
<li>
  <Link to="/pipeline">
    Pipeline
  </Link>
</li>
<li>
  <Link to="/calendar">
    Calendar
  </Link>
</li>
          <li>
            <Link to="/settings">
              Settings
            </Link>
          </li>

        </ul>

      </div>

    </aside>

  );
}
<li>
  <Link to="/tasks">
    Tasks
  </Link>
</li>