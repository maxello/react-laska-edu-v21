import { useEffect, useMemo } from 'react'
import { useGallery, type WixMedia } from '../hooks/use-gallery';
import { Masonry } from 'react-plock';
import Loader from '../components/Loader';
import { useInView } from "react-intersection-observer";
import GalleryItem from '../components/GalleryItem';
import { useLocation } from 'react-router';
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from 'gsap';

const Gallery = () => {
  const {
    data,
    isPending,
    isError,
    error,
    isSuccess,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage
  } = useGallery(25);
  console.log("data", data);
  const itemRef = useRef(null);

  useGSAP(() => {
    if (isSuccess) {
      gsap.from(itemRef.current, { opacity: 0, yPercent: 5, duration: 0.5, ease: 'power1.out', delay: 0.5 });
    }
  }, [isSuccess]);
  
  const location = useLocation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage])

  const loadedImages = useMemo(() => {
    const images: WixMedia[] = [];
    data?.pages.forEach((group) => {
      group.gallery.items.forEach((item) => images.push(item));
    });
    return images;
  }, [data]);

  console.log("loadedImages", loadedImages);

  if (isPending) {
    return <Loader className="modal-margin" />
  }

  if (isError) {
    return <div className="text-primary text-center py-5">Something went wrong: {error.message}. Try again later.</div>
  }

  return (
    <div ref={itemRef} className="px-[6px]">
      <Masonry
        items={loadedImages}
        config={{
          columns: [2, 3],
          gap: [6, 6],
          media: [768, 1024],
        }}
        render={(item, idx) => {
          return <GalleryItem item={item} idx={idx} location={location} />
        }}
      />
      <div className="h-[6px]" ref={ref}>
        {isFetchingNextPage && <Loader />}
      </div>
    </div>
  )
}

export default Gallery