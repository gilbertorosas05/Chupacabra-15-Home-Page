"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L, { LatLngExpression } from "leaflet";

const markerIcon = new L.Icon({
	iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
	iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
	shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
	iconSize: [25, 41],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
	shadowSize: [41, 41],
});

type ServiceLocation = { name: string; position: LatLngExpression };

const locations: ServiceLocation[] = [
	{ name: "Omaha", position: [41.2565, -95.9345] },
	{ name: "Bellevue", position: [41.1544, -95.9146] },
	{ name: "Papillion", position: [41.1547, -96.0422] },
	{ name: "La Vista", position: [41.1836, -96.03] },
	{ name: "Ralston", position: [41.2017, -96.0428] },
	{ name: "Bennington", position: [41.3642, -96.1564] },
	{ name: "Elkhorn", position: [41.2867, -96.2348] },
	{ name: "Gretna", position: [41.1406, -96.2411] },
	{ name: "Millard", position: [41.2086, -96.1303] },
	{ name: "Chalco", position: [41.1806, -96.1489] },
	{ name: "Council Bluffs (IA)", position: [41.2619, -95.8608] },
	{ name: "Springfield", position: [41.0839, -96.1339] },
	{ name: "Valley", position: [41.3144, -96.3464] },
	{ name: "Waterloo", position: [41.2844, -96.297] },
];

export default function NebraskaMap() {
	return (
		<MapContainer center={[41.2565, -95.9345]} zoom={10} scrollWheelZoom={false} style={{ height: 420, width: "100%" }}>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			{locations.map((loc) => (
				<Marker key={loc.name} position={loc.position} icon={markerIcon}>
					<Popup>{loc.name}</Popup>
				</Marker>
			))}
		</MapContainer>
	);
}