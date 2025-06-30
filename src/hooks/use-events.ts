import { useInfiniteQuery } from "@tanstack/react-query";

type EventImageProps = {
  height: string,
  width: string,
  id: string,
  url: string
}

type EventProps = {
  id: string,
  mainImage: EventImageProps,
  title: string
}

type EventsComponentProps = {
  events: EventProps[]
}

type DateProps = {
  startDate: string,
  startDateISOFormatNotUTC: string,
  shortStartDate: string
}

type EventsResponse = {
  component: EventsComponentProps,
  total: number,
  dates: {
    events: {
      [key: EventImageProps['id']]: DateProps
    }
  }
}

type PageParams = {
  offset: number,
  limit: number
}

const fetchEvents = async ({ pageParam }: {pageParam: PageParams}): Promise<EventsResponse> => {
  const params = new URLSearchParams({
    limit: pageParam.limit.toString(),
    offset: pageParam.offset.toString()
  });

  //await new Promise(resolve => setTimeout(resolve, 2000));
  const res = await fetch(`${import.meta.env.VITE_PRODUCTION_API_URL}/events?${params}`);
  return res.json();
}

export function useEvents(limit: number = 10) {
  return useInfiniteQuery({
      queryKey: ['events'],
      queryFn: fetchEvents,
      initialPageParam: {
        offset: 0,
        limit
      },
      getNextPageParam: (_, pages) => {
        if (pages[0].total <= pages.length * limit) {
          return null;
        }
        return {
          limit,
          offset: pages.length * limit
        };
      },
  });
}