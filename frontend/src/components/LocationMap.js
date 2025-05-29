import React, { useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import LocationInfo from "./LocationInfo";
import MarkerIcon from '../assets/icon-location.svg'

function LocationMap({ mapPosition, locationData }) {
    const mapRef = useRef(null);
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    console.log(windowSize)

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };

        window.addEventListener("resize", handleResize);

        // Cleanup the event listener
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const UpdateMap = ({ position }) => {
        const map = useMap();
        useEffect(() => {
            map.setView([position.latitude, position.longitude], 2); 
        }, [position, map]);
        return null;
    };

    const customIcon = L.icon({
        iconUrl: MarkerIcon,
        iconSize: [40, 40], 
        iconAnchor: [20, 40], 
        popupAnchor: [0, -40], 
    });

    const locationInfoStyle = {
        position: "absolute",
        width: "90%", 
        height: "161px",
        top: "-120px",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 10000,
        backgroundColor: "white",
        borderRadius: "15px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
        flexWrap: "wrap",
        display: "flex",
        justifyContent: "center", 
        alignItems: "center", 
    };


    return (
        <div style={{ position: "relative" }}>
            <div
                style={locationInfoStyle}
            >
                <LocationInfo data={locationData} />
            </div>
            <MapContainer
                center={[mapPosition.latitude, mapPosition.longitude]} 
                zoom={2} 
                style={{ width: windowSize.width, height: windowSize.height}}
                ref={mapRef}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                <UpdateMap position={mapPosition} />
                {locationData && (
                    <Marker position={[locationData.location.latitude, locationData.location.longitude]} icon={customIcon}>
                        <Popup>
                            {locationData.location.city}, {locationData.location.country}
                        </Popup>
                    </Marker>
                )}
            </MapContainer>
        </div>
    );
}

export default LocationMap;

