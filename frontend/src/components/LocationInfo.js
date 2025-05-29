import React from "react";

function LocationInfo({ data }) {
    return (
        <div className="location-info">
            <div>
                <p className="location-title">IP Address</p>
                <h2 className="location-data">{data ? data.ip : "-"}</h2>
            </div>
            <div>
                <p className="location-title">Location</p>
                <h2 className="location-data">
                    {data
                        ? `${data.location.city}, ${data.location.region}, ${data.location.country}`
                        : "-"}
                </h2>
            </div>
            <div>
                <p className="location-title">Timezone</p>
                <h2 className="location-data">{data ? data.timezone : "-"}</h2>
            </div>
            <div>
                <p className="location-title">ISP</p>
                <h2 className="location-data">{data ? data.isp : "-"}</h2>
            </div>
        </div>
    );
}

export default LocationInfo;



