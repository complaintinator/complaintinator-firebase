function Navbar() {
  return (
    <header className="mx-auto max-w-6xl px-6 bg-transparent">
      <div className="relative md:flex flex-row justify-between py-4 align-center md:py-6">
        <div className="flex items-center flex-1">
          <p className="text-3xl font-bold md:text-white md:text-2xl hidden md:inline">
            Complaintinator
          </p>
        </div>
        <nav className="flex justify-evenly">
          <a
            className="mr-5 text-yellow-500 p-3 rounded hover:text-blue-400 hover:bg-white transition duration-500 ease-in-out"
            href="/"
          >
            Register
          </a>
          <a
            className="mr-5 text-yellow-500 p-3 rounded hover:text-blue-400 hover:bg-white transition duration-500 ease-in-out"
            href="/"
          >
            Login
          </a>
          <a
            className="mr-5 text-yellow-500 p-3 rounded hover:text-blue-400 hover:bg-white transition duration-500 ease-in-out"
            href="/"
          >
            Admin
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
