import { useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow
});

const ResizeMap = () => {
  const map = useMap();
  useEffect(() => {
    setTimeout(() => {
      map.invalidateSize();
    }, 250)
  }, [map]);
  
  return null;
};

L.Marker.prototype.options.icon = DefaultIcon;

const LeafletMap = () => {
  const mapRef = useRef(null);

  const latitude = 56.95030070602186;
  const longitude = 24.149774095882353;

  return (
    <MapContainer center={[latitude, longitude]} zoom={17} scrollWheelZoom={false} ref={mapRef} className="leaflet-map">
      <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <ResizeMap />
  <Marker position={[latitude, longitude]}>
    {/* <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup> */}
  </Marker>
    </MapContainer>
  )
}

export default LeafletMap

