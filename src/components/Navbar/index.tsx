
const Navbar = () => {
  return (
      <nav className="flex flex-wrap items-center justify-between px-2 py-1 bg-orange-600">
        <div>
            <span
              className="text-sm font-bold mr-4 py-2 uppercase"
            >
              Hacker news
            </span>
            <span>
           new | past | comments | ask | show | jobs | submit
            </span>
            </div>
         <span>Login</span>
      </nav>
  );
}

export default Navbar;