import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icon in Leaflet with React
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

const locations = [
  {
    id: 1,
    name: 'Autxana España',
    region: 'Navarra',
    coords: [42.8125, -1.6458] as [number, number],
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Navarra+Spain'
  },
  {
    id: 2,
    name: 'Autxana USA',
    region: 'Florida',
    coords: [27.6648, -81.5158] as [number, number],
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Florida+USA'
  },
  {
    id: 3,
    name: 'Autxana Venezuela',
    region: 'Caracas',
    coords: [10.4806, -66.9036] as [number, number],
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Caracas+Venezuela'
  }
];

export default function ContactMap() {
  return (
    <div className="h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
      <MapContainer 
        center={[25, -40]} 
        zoom={3} 
        scrollWheelZoom={false}
        className="h-full w-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {locations.map((loc) => (
          <Marker key={loc.id} position={loc.coords}>
            <Popup>
              <div className="p-2 min-w-[150px]">
                <h3 className="font-bold text-brand-primary text-sm mb-1">{loc.name}</h3>
                <p className="text-xs text-slate-600 mb-3">{loc.region}</p>
                <div className="flex flex-col gap-2">
                  <a 
                    href={loc.googleMapsUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[10px] bg-brand-accent text-white px-3 py-1.5 rounded-lg font-bold text-center hover:bg-brand-primary transition-colors"
                  >
                    Ver en Google Maps
                  </a>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
