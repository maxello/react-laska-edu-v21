import React from 'react'
import type { WixMedia } from '../hooks/use-gallery';
import { NavLink, type Location } from 'react-router';

const GalleryItem = ({ item, idx, location }: { item: WixMedia, idx: number, location: Location }) => {
  let element: React.ReactNode | null = null;
  if (item.type === 'VIDEO') {
    element = <video muted loop playsInline autoPlay style={{ width: '100%', height: 'auto' }} poster={item.video?.videoInfo.posters[0].url}>
      <source
        src={item.video?.videoInfo.url}
        type="video/mp4"
      />
    </video>
  } else if(item.type === 'IMAGE') {
    const w = item.image?.imageInfo.width ? Math.floor(item.image?.imageInfo.width * 40 / 100) : 1024;
    const h = item.image?.imageInfo.height ? Math.floor(item.image?.imageInfo.height * 40 / 100) : 768;
    element = <img width={w} height={h} className="transition-transform duration-3000 ease-in group-hover:scale-110" src={`${item.image?.imageInfo.url}/v1/fill/w_${w},h_${h},q_90,enc_avif,quality_auto/${item.image?.imageInfo.url}`} style={{ width: '100%', height: 'auto' }} />
  }
  return <NavLink to={`/gallery/${item.id}`} state={{ backgroundLocation: location }} key={idx} className="group block overflow-hidden bg-primary-foreground">
    {element}
  </NavLink>
}

export default GalleryItem