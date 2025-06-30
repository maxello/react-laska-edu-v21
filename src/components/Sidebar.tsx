import { useEffect } from 'react';
import { cn } from '../lib/utils';
import Navbar from './Navbar';
import { X } from 'lucide-react';
import { useLocation } from 'react-router';

const Sidebar = ({ isOpen, closeSidebar }: { isOpen: boolean, closeSidebar: () => void }) => {
  const location = useLocation();

  useEffect(() => {
    if (location) {
      closeSidebar();
    }
  }, [location, closeSidebar]);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-y-hidden');
    } else {
      document.body.classList.remove('overflow-y-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-y-hidden');
    };
  }, [isOpen]);

  return (
    <>
      <div className={cn(isOpen ? "opacity-100 left-0 z-1000" : "opacity-0 -z-1 -left-[100%]", "top-0 h-[100dvh] w-full bg-background/50 transition-opacity absolute")} onClick={closeSidebar} />
      <div className={cn(isOpen ? "left-0" : "-left-[70vw]", "z-[1001] w-[70vw] top-0 absolute bg-background transition-all h-[100dvh]")} onClick={(e) => e.stopPropagation()}>
        <div className="text-end mb-6">
          <button type="button" className="ml-full mr-auto p-4 text-3xl" onClick={closeSidebar}>
            <span className="sr-only">Close menu</span>
            <X size={26} />
          </button>
        </div>
        <Navbar isMobile={true} isOpen={isOpen} />
      </div>
    </>
  )
}

export default Sidebar