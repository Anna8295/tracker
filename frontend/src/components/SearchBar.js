import React from "react";
import Arrow from '../assets/icon-arrow.svg'

function SearchBar({ ip, setIp, onSearch }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        if (ip) onSearch(ip);
    };

    return (
        <form onSubmit={handleSubmit} className="search-bar">
            <input
                type="text"
                value={ip}
                onChange={(e) => setIp(e.target.value)}
                placeholder="Enter IP Address"
                className="search-input"
            />
            <button type="submit" className="search-button">
                <img src={Arrow} alt="Search"/>
            </button>
        </form>
    );
}

export default SearchBar;
