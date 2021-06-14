import firebaseConfig from "../services/config";
import Sidebar from "../components/sidebar";
import { useEffect, useState } from "react";
import plus from "../icons/plus.png";
import { motion } from "framer-motion";

function Dashboard() {
  useEffect(() => {
    document.title = "Complaintinator | Dashboard";
  }, []);

  const [initSidebar, setSidebar] = useState(false);

  const sidebarHandler = () => {
    setSidebar(true);
  };

  return (
    <main>
      <div className="relative min-h-screen md:flex">
        {initSidebar && <Sidebar setSidebar={setSidebar} />}
        {!initSidebar && (
          <div className="md:fixed md:z-50 md:bottom-4 md:right-4 md:p-6 text-white md:m-10 p-2 mb-5 flex items-center justify-center">
            <motion.img
              src={plus}
              alt="plus"
              className="w-14 h-14 cursor-pointer"
              onClick={sidebarHandler}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            />
          </div>
        )}
        <div className="flex-1 p-10 font-bold">
          <p className="text-white text-center">Dashboard</p>
          <div className="text-center mt-10">
            <button
              onClick={() => firebaseConfig.auth().signOut()}
              className="text-white bg-blue-500 p-2 rounded hover:text-blue-500 hover:bg-white"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Dashboard;
