import { useNavigate } from "react-router";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog"

import GalleryView from "./GalleryView";
import { useCallback, useState } from "react";
import Loader from "./Loader";

const GalleryModal = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleClose = () => {
    navigate(-1);
  };

  const loadingHandle = useCallback((value: boolean) => {
    setIsLoading(value);
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      <Dialog open onOpenChange={handleClose}>
        <DialogContent className="rounded-none max-w-[90%] bg-background overflow-y-hidden modal-margin z-650 text-white w-max">
          <DialogHeader className="gap-0">
          <DialogTitle className="leading-0" />
            <div className="h-full bg-back max-h-[90dvh] w-full overflow-y-auto mx-auto">
              <GalleryView onLoading={loadingHandle} />
              <DialogDescription className="leading-0" />
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>

  )
}

export default GalleryModal