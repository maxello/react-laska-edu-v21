import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SocialMedia from './SocialMedia';
import { useRef } from "react";

const Aside = () => {
  const main = useRef(null)
  useGSAP(async () => {
    gsap.from('.gsapSublogo', {
      opacity: 0,
      yPercent: -100,
      duration: 1.5,
      ease: 'expo.out',
      delay: 0.4
    });
  }, {scope: main});
  return (
    <div ref={main} className="lg:order-1 bg-primary text-primary-foreground h-full lg:w-[80px] lg:sticky top-0 lg:min-h-[100svh] flex lg:flex-col items-center justify-between px-4 lg:px-0 py-2 lg:py-4">
      <div className="uppercase font-orbitron text-[1.8rem] md:text-[2rem] font-bold gsapSublogo lg:min-w-[48px] lg:min-h-[72px] label">v21</div>
      <SocialMedia />
    </div>
  )
}

export default Aside