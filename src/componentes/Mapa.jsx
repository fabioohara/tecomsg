import { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import logo3 from '../assets/logo3.svg'

export default function Mapa() {
  useEffect(() => {
    // 💡 Previene error: "Map container is already initialized"
    const mapContainer = document.getElementById('map');
    if (mapContainer._leaflet_id) {
      mapContainer._leaflet_id = null;
    }

    const map = L.map('map', {
        center: [-12.10000, -76.97027],
        zoom: 14,
        zoomControl: true,
        dragging: true, // 👈 esto oculta los botones de zoom
      });

      
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(map);

    // 👻 Icono invisible
    const invisibleIcon = L.divIcon({
        className: 'invisible-marker', // clase personalizada
        html: '', // sin contenido
        iconSize: [0, 0], // sin tamaño
      });


    const marker = L.marker([-12.10270, -76.97027], {
        icon: invisibleIcon,
      }).addTo(map);
      marker.bindPopup(
      `<div class="popup-negro">
     <img src="${logo3}" alt="Logo" style="width: 80px; display: block; margin-bottom: 0px;padding:0px" />
  Av. la Encalada Nro. 1390
   </div>`,
        {
          closeOnClick: false,       // ✅ no se cierra al hacer clic en el mapa
          autoClose: false,          // ✅ no se cierra si se abre otro popup
          closeButton: false,        // ✅ opcional: oculta el botón (X) de cerrar
          className: 'popup-negro',  // para estilos personalizados
        }
      ).openPopup();
      map.dragging.enable();
map.touchZoom.enable();
map.scrollWheelZoom.enable();
map.boxZoom.enable();
map.keyboard.enable();
if (map.tap) map.tap.enable();
  }, []);

  return (
    <div
      id="map"
      style={{
        height: '200px',
        width: '400px',
        borderRadius: '8px',
      }}
    ></div>
  );
}
