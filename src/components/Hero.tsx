import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import { useRef } from "react";
import { NavLink } from "react-router";

type heroListItemProps = {
  title: string,
  link: string,
  img: string
}

const heroListItems = [
  {
    title: "Events",
    link: "/events",
    img: "https://static.wixstatic.com/media/995749_f102b9f8d1274d52a2831ccfe71c5f01~mv2.jpg/v1/fit/w_616,h_411,q_90,enc_avif,quality_auto/995749_f102b9f8d1274d52a2831ccfe71c5f01~mv2.jpg"
  },
  {
    title: "Gallery",
    link: "/gallery",
    img: "https://static.wixstatic.com/media/995749_f9327b3f42f0489d99154b0d87118184~mv2.jpeg/v1/fit/w_630,h_420,q_90,enc_avif,quality_auto/995749_f9327b3f42f0489d99154b0d87118184~mv2.jpeg"
  }
]

const AnimatedItem = ({ item, index }: { item: heroListItemProps, index: number }) => {
  const itemRef = useRef(null);

  useGSAP(() => {
    gsap.from(itemRef.current, { opacity: 0, y: 100, duration: 1.5, ease: 'expo.out', delay: index * 0.3 + 0.3 });
  }, []);

  return (
    <NavLink to={item.link} ref={itemRef} className="card sm:w-[50%] aspect-video">
      <div className="h-full relative p-[2px] overflow-hidden">
        <div className="shiny" style={index % 2 !== 0 ? {animationDirection: "reverse"} : {}} />
        <div className="group h-full overflow-hidden relative bg-background">
          <img className="transition-transform duration-300 ease-in-out group-hover:scale-130 relative object-cover" src={item.img} alt={item.title} width="630" height="420" />
          <p className="text-3xl tracking-wider text-shadow-[2px_2px_5px_rgb(0_0_0)] text-white absolute bottom-6 left-6 uppercase font-orbitron font-semibold">{item.title}</p>
        </div>
      </div>
    </NavLink>
  )
};

const Hero = () => {
  useGSAP(async () => {
    await document.fonts.ready;
    const heroTitleSplit = new SplitText('.gsapHeroTitle', { type: 'chars' });
    const heroSubtitleSplit = new SplitText('.gsapHeroSubtitle', { type: 'chars' });
    const copySplit = new SplitText('.gsapHeroCopy', { type: 'lines' });

    gsap.from(heroTitleSplit.chars, {
      opacity: 0,
      duration: 1,
      ease: 'expo.out',
      stagger: 0.08
    });

    gsap.from(heroSubtitleSplit.chars, {
      opacity: 0,
      duration: 1,
      ease: 'expo.out',
      stagger: 0.08,
      delay: 0.3
    });

    gsap.from(copySplit.lines, {
      opacity: 0,
      yPercent: 50,
      duration: 1.5,
      ease: 'expo.out',
      stagger: 0.06,
      delay: 0.4
    });

  }, []);

  return (
    <section className="hero flex gap-7 flex-col py-12 justify-center">
      <div className="uppercase font-orbitron font-semibold leading-[1.1]">
        <h1 className="text-primary text-[3rem] md:text-[3.6rem] gsapHeroTitle">Laska</h1>
        <div className="block text-[1.8rem] md:text-[2rem] gsapHeroSubtitle text-white">v21</div>
      </div>
      <div className="mb-2 relative before:absolute max-w-[510px] before:-z-10 before:blur-2xl before:top-0 before:left-0 before:w-full before:h-full before:bg-background/40">
        <p className="text-gray-300 font-medium md:text-lg leading-[1.5] relative gsapHeroCopy">This is an educational website redesign of the laska bar website, unrelated to the original brand. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio illo modi facere vitae nostrum odio.</p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 lg:gap-8">
        {heroListItems?.map((item, ind) => (
          <AnimatedItem key={item.title} item={item} index={ind} />
        ))}
      </div>
    </section>
  )
}

export default Hero