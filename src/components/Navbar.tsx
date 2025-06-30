import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
import { NavLink } from "react-router"

const links = [
  {
    title: "Home",
    to: "/"
  },
  {
    title: "Events",
    to: "/events"
  },
  {
    title: "Gallery",
    to: "/gallery"
  },
  {
    title: "About us",
    to: "/about-us"
  }
]

const linkClasses = "py-2 px-4 block font-orbitron font-medium transition-colors hover:text-primary";

const Navbar = ({isMobile, isOpen}: {isMobile?: boolean, isOpen?: boolean}) => {
  const containerRef = useRef(null);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (isMobile) {
        gsap.from('.gsapListItem', {
          opacity: 0,
          y: 50,
          stagger: 0.2,
          duration: 0.8,
          ease: 'power3.out',
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, [isMobile, isOpen]);

  return (
    <nav>
      <ul className="flex flex-col md:flex-row items-center gap-6 md:gap-2 text-xl md:text-base" ref={containerRef}>
        {links?.map(items => (
          <li key={items.title} className="gsapListItem">
            <NavLink to={items.to} className={({ isActive }) => (isActive ? `text-red-500 ${linkClasses}` : linkClasses)}>{items.title}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar