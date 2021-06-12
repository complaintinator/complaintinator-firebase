import firebaseConfig from "../services/config";

function Dashboard() {
  return (
    <main>
      <p className="text-white text-center mt-20">Dashboard</p>
      <div className="text-center mt-10">
        <button
          onClick={() => firebaseConfig.auth().signOut()}
          className="text-white bg-blue-500 p-2 rounded hover:text-blue-500 hover:bg-white"
        >
          Logout
        </button>
      </div>
    </main>
  );
}

export default Dashboard;
