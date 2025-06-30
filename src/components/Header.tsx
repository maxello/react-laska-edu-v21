
import ThemeToggle from "./ThemeToggle"
import Navbar from "./Navbar";
import { NavLink } from "react-router"
import { Menu } from 'lucide-react';
import Sidebar from "./Sidebar";
import { useCallback, useState } from "react";

const Header = () => {
  const [isSidebarOpen, setIsSideBarOpen] = useState(false);

  const handleCloseSidebar = useCallback(() => {
    setIsSideBarOpen(false);
  }, []);
  
  return (
    <div className="flex bg-primary-foreground/80 items-center justify-between sticky top-0 left-[80px] right-0 z-[500] header px-5">
      <NavLink to="/" className="flex items-center gap-3 max-w-[84px] aspect-square">
        <img src="/logo-red.png" alt="Laska v21 (not original)" width="168" height="168" />
      </NavLink>
      <div className="hidden md:block">
        <Navbar />
      </div>
      <div className="flex items-center gap-1 -mr-3.5 md:mr-0">
        <ThemeToggle />
        <div className="md:hidden">
          <button type="button" className="cursor-pointer text-3xl p-2" onClick={() => setIsSideBarOpen(!isSidebarOpen)}>
            <span className="sr-only">Open menu</span>
            <Menu size={26} />
          </button>
        </div>
        <div className="md:hidden">
          <Sidebar isOpen={isSidebarOpen} closeSidebar={handleCloseSidebar} />
        </div>
      </div>
    </div>
  )
}

export default Header