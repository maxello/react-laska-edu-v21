import { useGSAP } from '@gsap/react';
import { useRef } from 'react'
import LeafletMap from '../components/LeafletMap'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger)

const InfoSection = () => {
  const itemRef = useRef(null);
  const itemRef2 = useRef(null);
  const main = useRef(null);

useGSAP(
  () => {
    [itemRef.current, itemRef2.current].forEach((box, index) => {
      gsap.from(box, {
        x: index % 2 !== 0 ? 150 : -150,
        opacity: 0,
        scrollTrigger: {
          trigger: box,
          start: '30% bottom',
          end: '30% 70%',
        },
      });
    });
  },
  {scope: main}
);
  return (
    <section className="py-12 bg-background/80 relative backdrop:blur-[3px]">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-center gap-8" ref={main}>
          <div className="w-full md:w-[50%] gsapItem flex justify-center flex-col" ref={itemRef}>
            <h2 className="font-orbitron font-medium text-2xl mb-4 text-center tracking-[0.05rem]">Opening Hours</h2>
            <table className="text-lg mx-auto">
              <tbody>
                <tr>
                  <td><div className="uppercase text-primary mr-5 text-right">Tue &#8226; Wed &#8226; Thu</div></td>
                  <td>5pm - 12am</td>
                </tr>
                <tr>
                  <td><div className="uppercase text-primary mr-5 text-right">Fri &#8226; Sat</div></td>
                  <td>5pm - 3am</td>
                </tr>
                <tr>
                  <td><div className="uppercase text-primary mr-5 text-right">Sun</div></td>
                  <td>5pm - 12am</td>
                </tr>
                <tr>
                  <td><div className="uppercase text-primary mr-5 text-right">Mon</div></td>
                  <td>closed <span className="text-primary">:(</span></td>
                </tr>
                </tbody>
              </table>
          </div>
          <div className="w-full md:w-[50%] gsapItem" ref={itemRef2}>
            <p className="mb-4 text-center">Vagonu iela 21, Rīga, LV-1009, Latvia.</p>
            <div className="mb-8 flex flex-col items-center">
              <LeafletMap />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InfoSection