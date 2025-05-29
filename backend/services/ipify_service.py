import os
from dotenv import load_dotenv
from fastapi import HTTPException
import requests

load_dotenv()

API_KEY = os.getenv("IPIFY_API_KEY")
IPIFY_URL = "https://geo.ipify.org/api/v2/country,city"

def fetch_ip_details(ip: str):
    if not API_KEY:
        raise HTTPException(status_code=500, detail="API key not found")

    try:
        response = requests.get(
            IPIFY_URL,
            params={"apiKey": API_KEY, "ipAddress": ip},
        )
        response.raise_for_status()
        return response.json()
    except requests.exceptions.RequestException as e:
        raise HTTPException(status_code=500, detail="Error fetching IP details") from e
