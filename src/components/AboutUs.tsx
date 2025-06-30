import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const AboutUs = () => {
  const itemRef = useRef(null);

  useGSAP(() => {
    gsap.from(itemRef.current, { opacity: 0, yPercent: 5, duration: 0.5, ease: 'power1.out' });
  }, []);
  return (
    <div className="flex flex-col gap-8" ref={itemRef}>
      <div className="h-full relative p-[2px] overflow-hidden card">
        <div className="shiny" />
        <div className="group h-full overflow-hidden relative bg-background">
          <div className="grid lg:grid-cols-2">
            <article className="bg-background flex h-full flex-col justify-center px-5 py-8 sm:py-15 lg:py-5 lg:px-10">
              <h2 className="font-orbitron font-medium text-2xl md:text-4xl mb-4 text-center text-primary tracking-[0.05rem]">LASKA BAR</h2>
              <p className="md:text-xl text-center leading-[1.65]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos exercitationem officia nulla maiores minima nam magnam molestiae officiis culpa sed! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore harum voluptatem nostrum nisi non rerum.</p>
            </article>
            <div className="lg:h-full aspect-square overflow-hidden">
              <img className="object-cover w-full h-full" width="1128" height="853" src="https://static.wixstatic.com/media/995749_779cb015844f40879ac07c112fe6e593~mv2.jpeg/v1/fill/w_1128,h_853,al_c,q_85,enc_avif,quality_auto/995749_779cb015844f40879ac07c112fe6e593~mv2.jpeg" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="h-full relative p-[2px] overflow-hidden card">
        <div className="shiny" style={{animationDirection: "reverse"}} />
        <div className="group h-full overflow-hidden relative bg-background">
          <div className="grid lg:grid-cols-2">
            <article className="lg:order-1 bg-background flex h-full flex-col justify-center px-5 py-8 sm:py-15 lg:py-5 lg:px-10">
              <h2 className="font-orbitron font-medium text-2xl md:text-4xl mb-4 text-center text-primary tracking-[0.05rem]">LASKA V21</h2>
              <p className="md:text-xl text-center leading-[1.65]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, quis consequuntur maiores laborum maxime veniam veritatis eaque mollitia ducimus accusamus voluptatem repellendus doloribus debitis qui nulla est, dicta amet soluta reiciendis culpa aliquam, praesentium ad sunt! Quidem, facilis! Quas, adipisci aliquid? Sequi, iste vitae. Impedit modi consectetur, quidem maxime error aliquid sunt saepe dolor praesentium, veritatis expedita! Ut, possimus temporibus?</p>
            </article>
            <div className="lg:h-full aspect-square overflow-hidden">
              <img className="object-cover w-full h-full" width="1248" height="1118" src="https://static.wixstatic.com/media/995749_7813369e6fe64849ad543e4bd8291138~mv2.jpg/v1/fill/w_1248,h_1118,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/995749_7813369e6fe64849ad543e4bd8291138~mv2.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs