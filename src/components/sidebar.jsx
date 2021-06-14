import cross from "../icons/cross.png";
import { motion } from "framer-motion";

function Sidebar({ setSidebar }) {
  const styler =
    "shadow appearence-none w-full py-2 px-3 text-grey-darker mb-2 border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-600 text-white rounded shadow-md";

  const crossHandler = () => {
    setSidebar(false);
  };

  return (
    <motion.div
      className="bg-gray-800 text-gray-600 w-2/5 inset-y-0 left-0 absolute"
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5, type: "tween" }}
    >
      <div className="flex justify-end p-5">
        <img
          src={cross}
          alt="cross"
          className="w-5 h-5 cursor-pointer"
          onClick={crossHandler}
        />
      </div>
      <nav className="mt-5 mx-auto w-4/5">
        <form>
          <div>
            <label className="block text-gray-darker text-md font-bold mb-2 text-white tracking-wider uppercase">
              Title
            </label>
            <input type="text" className={styler} />
          </div>
          <div className="mt-10">
            <label className="block text-gray-darker text-md font-bold mb-2 text-white tracking-wider uppercase">
              Meta
            </label>
            <textarea
              type="text"
              className="shadow appearence-none w-full py-2 px-3 text-grey-darker mb-2 border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-600 text-white rounded shadow-md h-32"
            ></textarea>
          </div>
        </form>
      </nav>
    </motion.div>
  );
}

export default Sidebar;
