import React, { useEffect, useRef } from 'react'
import { useEvents } from '../hooks/use-events';
import Loader from './Loader';
import { useGSAP } from '@gsap/react';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';
import { formatDistanceToNowStrict } from "date-fns";
import { Clock } from 'lucide-react';

const Events = () => {
  const {
    data,
    isPending,
    isError,
    isSuccess,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage
  } = useEvents(25);

  const itemRef = useRef(null);
  const { ref, inView } = useInView();

  useGSAP(() => {
    if (isSuccess) {
      gsap.from(itemRef.current, { opacity: 0, yPercent: 5, duration: 0.5, ease: 'power1.out' });
    }
  }, [isSuccess]);

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  if (isPending) {
    return <Loader className="modal-margin" />
  }

  if (isError) {
    return <div className="text-primary text-center py-5">Something went wrong. Try again later.</div>
  }

  return (
    <>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4" ref={itemRef}>
        {data?.pages.map((group, ind) => (
          <React.Fragment key={ind}>
            {group.component.events.map((event) => {
              const toDate = formatDistanceToNowStrict(
                new Date(group.dates.events[event.id].startDateISOFormatNotUTC),
                {unit: 'day'}
              )
              return (
                <div key={event.id} className="border border-muted-foreground bg-background flex flex-col">
                  <img className="aspect-square bg-foreground w-full" src={event.mainImage.url} alt={event.title} height={event.mainImage.height} width={event.mainImage.width} />
                  <div className="p-6 flex flex-col gap-6 justify-between h-full">
                    <div className="flex justify-center items-center text-muted-foreground gap-1.5 text-sm"><Clock size={14} />{`${toDate} to the event`}</div>
                    <h3 className="font-orbitron font-medium text-xl text-center tracking-[0.05rem]">{event.title}</h3>
                    <div className="text-center text-lg">{group.dates.events[event.id].shortStartDate}</div>
                    <button className="cursor-pointer border border-primary disabled:cursor-not-allowed disabled:border-muted-foreground disabled:text-muted-foreground disabled:bg-muted bg-primary text-xl font-medium text-white w-full p-4 uppercase tracking-[0.025rem]" type="button">Buy tickets</button>
                  </div>
                </div>
              )
            }
            )}
          </React.Fragment>
        ))}
      </div>
      <div className="h-[6px]" ref={ref}>
        {isFetchingNextPage && <Loader />}
      </div>
    </>
  )
}

export default Events