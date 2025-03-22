import { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export default function Mapa() {
  useEffect(() => {
    // 💡 Previene error: "Map container is already initialized"
    const mapContainer = document.getElementById('map');
    if (mapContainer._leaflet_id) {
      mapContainer._leaflet_id = null;
    }

    const map = L.map('map').setView([-12.0464, -77.0428], 14); // Lima, Perú

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(map);

    const marker = L.marker([-12.0464, -77.0428]).addTo(map);
    marker.bindPopup('<strong>Estoy aquí</strong><br>Lima, Perú').openPopup();
  }, []);

  return (
    <div
      id="map"
      style={{
        height: '400px',
        width: '100%',
        borderRadius: '8px',
      }}
    ></div>
  );
}
