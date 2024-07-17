import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'; 
import 'leaflet/dist/leaflet.css'; // Leaflet's CSS for proper map styling


const Map = ({ coords }) => {
  // If coords are not provided, do not render the map
  if (!coords) return null;

  return (
    // MapContainer sets up the map with initial center and zoom level
    <MapContainer center={coords} zoom={13} style={{ height: '400px', width: '100%' }}>

      {/* TileLayer specifies the map tiles and attribution */}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" // URL for OpenStreetMap tiles
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">
        OpenStreetMap
        </a> contributors' 
      />
      <Marker position={coords}>
        {/* Popup displays a message when the marker is clicked */}
        <Popup>Weather Location
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;