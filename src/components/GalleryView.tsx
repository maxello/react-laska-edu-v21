import { NavLink, useLocation, useParams } from 'react-router';
import { useGalleryItem } from '../hooks/use-gallery';
import { ArrowLeft } from 'lucide-react';
import { cn } from '../lib/utils';
import Loader from './Loader';
import { useEffect } from 'react';
const GalleryView = ({onLoading}: {onLoading?: (arg0: boolean) => void}) => {
  const { id } = useParams();
  const { state } = useLocation();
  const {
    data: imageData,
    isError,
    isPending,
    isLoading,
    error
  } = useGalleryItem(id || "");
  const isInsideModal = state?.backgroundLocation;

  useEffect(() => {
    if (isInsideModal && onLoading) {
      onLoading(isLoading);
    }
  }, [isLoading, isInsideModal, onLoading]);

  if (isPending && !isInsideModal) {
    return <Loader />
  }

  const width = imageData?.image?.imageInfo.width;
  const height = imageData?.image?.imageInfo.height;

  return (
    <div className="flex flex-col items-center">
      {isError ? (
        <div className={cn(isInsideModal ? "px-5 pt-20 pb-10 text-center" : "", "text-primary")}>Something went wrong: {error.message}. Try again later.</div>
      ) : (
        <div className={cn(width && height ? (width > height ? "w-full lg:max-w-[1100px]" : "w-full lg:max-w-[700px]") : "w-full lg:max-w-[500px]")}>
          {!isInsideModal && (
        <NavLink to="/gallery" className="inline-block mb-6 md:mb-8">
          <div className="flex gap-2 items-center">
            <ArrowLeft />
            <span>Back to Gallery</span>
          </div>
        </NavLink>
      )}
          {imageData?.image && (
            <img
              className="w-full h-auto"
              src={imageData?.image.imageInfo.url}
              width={imageData?.image.imageInfo.width}
              height={imageData?.image.imageInfo.height}
              alt={imageData?.image.imageInfo.altText}
            />
          )}
          {imageData?.video && (
            <video controls style={{ width: '100%', height: 'auto' }}>
              {imageData?.video?.videoInfo.resolutions.map((resolution) => (
                <source
                  key={resolution.url}
                  src={resolution.url}
                  type={`video/${resolution.format}`}
                  media={`(min-width: ${resolution.width}px)`}
                />
              ))}
            </video>
          )}
        </div>
      )}
    </div>
  )
}

export default GalleryView