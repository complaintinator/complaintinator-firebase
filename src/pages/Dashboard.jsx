import Sidebar from "../components/sidebar";
import { useContext, useEffect, useState } from "react";
import Dashboardnav from "../components/dashboardNavbar";
import { firestoreStorage } from "../services/config";
import Cards from "../components/cards";
import { AuthContext } from "../Auth";

function Dashboard() {
  const [initSidebar, setSidebar] = useState(false);
  const [initData, setData] = useState([]);
  const { currentStatus } = useContext(AuthContext);

  useEffect(() => {
    const loader = async () => {
      try {
        await firestoreStorage
          .collection("complaints")
          .where("createdBy", "==", currentStatus.uid)
          .onSnapshot((snap) => {
            let docs = snap.docs.map((doc) => {
              return {
                ...doc.data(),
                id: doc.id,
              };
            });
            setData(docs);
          });
      } catch (err) {}
    };

    loader();
  }, [currentStatus.uid]);

  return (
    <main>
      <div className="relative min-h-screen">
        {initSidebar && <Sidebar setSidebar={setSidebar} />}
        <div className="flex-1 p-10 font-bold">
          <Dashboardnav setSidebar={setSidebar} />
          {initData.length === 0 && (
            <p className="mt-10 text-center text-white">Loading...</p>
          )}
          <div className="mt-10">
            {initData.map((instance) => {
              return (
                <section key={instance.title} className="mt-5">
                  <Cards instance={instance} />
                </section>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Dashboard;
