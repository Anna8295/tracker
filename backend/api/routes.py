from fastapi import APIRouter
from models.ip_request import IPRequest
from services.ipify_service import fetch_ip_details

router = APIRouter()

@router.post("/location")
async def get_location(ip_request: IPRequest):
    ip = ip_request.ip
    data = fetch_ip_details(ip)

    return {
        "ip": data.get("ip"),
        "location": {
            "city": data.get("location", {}).get("city"),
            "region": data.get("location", {}).get("region"),
            "country": data.get("location", {}).get("country"),
            "latitude": data.get("location", {}).get("lat"),
            "longitude": data.get("location", {}).get("lng"),
        },
        "timezone": data.get("timezone"),
        "isp": data.get("isp"),
    }
