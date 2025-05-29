
# Tracker App

This project is a Tracker app that tracks your IP address and displays it to you. The app consists of two parts: a backend built with FastAPI (Python) and a frontend built with React. The design is inspired by a challenge from frontendmentor.io. The app also integrates with the IPify API to fetch IP address data.

## Run Locally

1. Clone the project
2. Set backend:
   - Navigate to the backend folder:
     ```bash
        cd backend
     ```
   - (Optional but recommended) Create and activate a virtual environment:
     ```bash
        python -m venv env
        # Windows
        .\env\Scripts\activate
        # macOS/Linux
        source env/bin/activate
     ```
   - Install backend dependencies
     ```bash
        pip install -r requirements.txt
     ```
   - Start the backend server
     ```bash
        uvicorn main:app --reload
     ```
3. Setup frontend
   - In the new terminal, navigate to the frontend folder:
     ```bash
        cd frontend
     ```
   - Install the frontend dependencies
     ```bash
        npm install
     ```
   - Start the frontend server
     ```bash
        npm start
     ```
4. Open the app:
   
   Open http://localhost:3000 to view it in your browser.

## Tech Stack

- FastAPI (Python) — backend
- React — frontend
- IPify API — for fetching IP address data
- Design inspired by frontendmentor.io

## Lessons Learned

This project gave me valuable experience working with FastAPI for backend API development alongside React for the frontend. Integrating with external APIs like IPify helped me understand asynchronous data fetching and handling in React. Using a design challenge from frontendmentor.io pushed me to create a clean, user-friendly interface.

## Acknowledgements

 - [The design and idea are taken from: frontendmentor.io]([https://www.frontendmentor.io/challenges/tic-tac-toe-game-Re7ZF_E2v](https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0))
