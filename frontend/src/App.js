import React, { useState } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import LocationMap from "./components/LocationMap";
import "./App.css";

function App() {
    const [ip, setIp] = useState("");
    const [locationData, setLocationData] = useState(null);
    const [mapPosition, setMapPosition] = useState({ latitude: 0, longitude: 0 }); 

    const handleSearch = async (ipAddress) => {
        try {
            const response = await axios.post("http://127.0.0.1:8000/location", { ip: ipAddress });
            setLocationData(response.data);

            setMapPosition({
                latitude: response.data.location.latitude,
                longitude: response.data.location.longitude,
            });
        } catch (error) {
            console.error("Error fetching location:", error);
        }
    };

    return (
        <div className="app-container">
            <div className="header-container">
                <h1 className="app-title">IP Address Tracker</h1>
                <SearchBar ip={ip} setIp={setIp} onSearch={handleSearch} />
            </div>
            <div className="map-container">
                <LocationMap mapPosition={mapPosition} locationData={locationData} />
            </div>
        </div>
    );
}

export default App;




