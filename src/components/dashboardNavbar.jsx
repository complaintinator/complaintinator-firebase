import firebaseConfig from "../services/config";
import { NavLink } from "react-router-dom";
import "./styles/style.css";

function Dashboardnav({ setSidebar }) {
  const sidebarHandler = () => {
    setSidebar(true);
  };

  return (
    <header className="mx-auto max-w-6xl px-6 bg-transparent">
      <div className="flex items-center flex-1"></div>
      <nav className="flex">
        <NavLink
          to="/dashboard"
          className="text-white border-b-2 border-blue-500 hover:bg-white p-3 hover:text-blue-500 mx-5 transition duration-200 ease-in-out"
        >
          Dashboard
        </NavLink>
        <button
          className="text-white border-b-2 border-blue-500 hover:bg-white p-3 hover:text-blue-500 mx-5 transition duration-200 ease-in-out font-bold"
          onClick={sidebarHandler}
        >
          New Complaint
        </button>
        <NavLink
          to="/"
          className="text-white border-b-2 border-blue-500 hover:bg-white p-3 hover:text-blue-500 mx-5 transition duration-200 ease-in-out"
          exact
        >
          Search
        </NavLink>
        <button
          className="text-white border-b-2 border-blue-500 hover:bg-white p-3 hover:text-blue-500 mx-5 font-bold transition duration-200 ease-in-out"
          onClick={() => firebaseConfig.auth().signOut()}
        >
          Logout
        </button>
      </nav>
    </header>
  );
}

export default Dashboardnav;
