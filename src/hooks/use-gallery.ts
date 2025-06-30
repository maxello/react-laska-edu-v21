import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

type WixImageMedia = {
  imageInfo: {
    id: string,
    url: string,
    width: number,
    height: number,
    altText: string,
  }
}

type PostersProp = {
  width: number,
  height: number,
  url: string,
}

type ResolutionsProp = {
  width: number,
  height: number,
  url: string,
  format: string,
}

type WixVideoMedia = {
  videoInfo: {
    id: string,
    url: string,
    posters: PostersProp[],
    resolutions: ResolutionsProp[]
  }
}

export type WixMedia = {
  id: number,
  type: "IMAGE" | "VIDEO",
  title: string;
  image?: WixImageMedia;
  video?: WixVideoMedia;
}

type GalleryItemProps = {
  item: WixMedia
}

type GalleryProps = {
  createdDate: string,
  id: string,
  items: WixMedia[],
  totalItemsCount: number
}

type ImagesResponse = {
  gallery: GalleryProps
}

type PageParams = {
  offset: number,
  limit: number
}

const fetchGallery = async ({ pageParam }: {pageParam: PageParams}): Promise<ImagesResponse> => {
  const params = new URLSearchParams({
    limit: pageParam.limit.toString(),
    offset: pageParam.offset.toString()
  });
  //await new Promise(resolve => setTimeout(resolve, 2000));
  const res = await fetch(`${import.meta.env.VITE_PRODUCTION_API_URL}/gallery?${params}`);
  return res.json();
}

const fetchGalleryItem = async (id: string): Promise<GalleryItemProps> => {
  const params = new URLSearchParams({
    id
  });
  //await new Promise(resolve => setTimeout(resolve, 2000));
  const res = await fetch(`${import.meta.env.VITE_PRODUCTION_API_URL}/gallery-item?${params}`);
  return res.json();
}

export function useGallery(limit: number = 10) {
  return useInfiniteQuery({
      queryKey: ['gallery'],
      queryFn: fetchGallery,
      initialPageParam: {
        offset: 0,
        limit
      },
      getNextPageParam: (_, pages) => {
        if (pages[0].gallery.totalItemsCount <= pages.length * limit) {
          return null;
        }
        return {
          limit,
          offset: pages.length * limit
        };
      },
  });
}

export function useGalleryItem(id: string) {
  return useQuery({
      queryKey: ['gallery', id],
      queryFn: fetchGalleryItem.bind(null, id),
      select: (data: GalleryItemProps) => {
        return data.item
      },
      staleTime: Infinity
  });
}