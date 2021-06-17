import { useEffect, useState, useContext } from "react";
import Dashboardnav from "../components/dashboardNavbar";
import Sidebar from "../components/sidebar";
import Fuse from "fuse.js";
import { firestoreStorage } from "../services/config";
import Cards from "../components/cards";
import { AuthContext } from "../Auth";

function Search() {
  const [initSidebar, setSidebar] = useState(false);
  const [initData, setData] = useState([]);
  const [initQuery, setQuery] = useState("");
  const { currentStatus } = useContext(AuthContext);

  useEffect(() => {
    const loader = async () => {
      try {
        const res = await firestoreStorage
          .collection("complaints")
          .where("createdBy", "==", currentStatus.uid)
          .get();

        const final = res.docs.map((doc) => {
          return {
            ...doc.data(),
          };
        });

        setData(final);
      } catch (err) {}
    };

    loader();
  }, [currentStatus.uid]);

  const fuse = new Fuse(initData, {
    keys: ["title", "description"],
  });

  const results = fuse.search(initQuery);
  const charecterResults = initQuery
    ? results.map((result) => result.item)
    : initData;

  function searchHandler({ currentTarget = {} }) {
    const { value } = currentTarget;
    setQuery(value);
  }

  return (
    <section className="relative min-h-screen p-10">
      {initSidebar && <Sidebar setSidebar={setSidebar} />}
      <Dashboardnav setSidebar={setSidebar} />
      <div className="mx-auto container mt-10 md:w-1/2 w-full">
        <input
          placeholder="🔍 Search..."
          className="bg-gray-700 p-3 text-white md:w-full w-full focus:outline-none focus:ring focus:border-blue-300 rounded shadow"
          value={initQuery}
          onChange={searchHandler}
        />
      </div>
      <div>
        {charecterResults.map((instance) => {
          return (
            <section key={instance.title} className="mt-5 w-full">
              <Cards instance={instance} />
            </section>
          );
        })}
      </div>
    </section>
  );
}

export default Search;
