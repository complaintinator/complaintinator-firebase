import Sidebar from "../components/sidebar";
import { useEffect, useState } from "react";
import Dashboardnav from "../components/dashboardNavbar";
import sanityClient from "../services/client";
import Cards from "../components/cards";

function Dashboard() {
  const [initSidebar, setSidebar] = useState(false);
  const [initData, setData] = useState(null);

  useEffect(() => {
    document.title = "Complaintinator | Dashboard";
    sanityClient
      .fetch(
        `*[_type == "complaints"]{
        title,
        description
      }`
      )
      .then((data) => setData(data))
      .catch(console.error);
  }, []);

  return (
    <main>
      <div className="relative min-h-screen">
        {initSidebar && <Sidebar setSidebar={setSidebar} />}
        <div className="flex-1 p-10 font-bold">
          <Dashboardnav setSidebar={setSidebar} />
        </div>
        {initData == null && (
          <p className="text-center text-white">Loading...</p>
        )}
        {!initData && <p className="text-center text-white">No complaints </p>}
        {initData &&
          initData.map((instance) => {
            return (
              <section key={instance.title} className="mt-5">
                <Cards instance={instance} />;
              </section>
            );
          })}
        )
      </div>
    </main>
  );
}

export default Dashboard;
