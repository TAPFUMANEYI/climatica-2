import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'; 
import 'leaflet/dist/leaflet.css'; // Leaflet's CSS for proper map styling


const Map = ({ coords }) => {
  // If coords are not provided, do not render the map
  if (!coords) return null;
