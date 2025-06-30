# Resume Editor Web App

## Overview
This is a web-based Resume Editor application built using React.js for the frontend and FastAPI for the backend.  
Users can upload their resume (mock parsing), edit various sections, enhance content using a mock AI backend, save their resume, and download it as a JSON file.

---

## Features

- Upload resume (PDF/DOCX) — mock parsing with dummy data  
- Editable fields: Name, Education, Skills, Experience  
- Enhance each section with AI (mocked enhancement)  
- Save resume data to FastAPI backend  
- Download final resume as JSON  

---

## Tech Stack

- Frontend: React.js  
- Backend: Python FastAPI  
- Server run with: Uvicorn  

---
## Setup Instructions

### Backend

1. Open terminal and go to backend folder:  
   `cd backend`

2. Create virtual environment and activate it:  
   - Windows:  
     `python -m venv myvenv`  
     `myvenv\Scripts\activate`  
   - Mac/Linux:  
     `python3 -m venv myvenv`  
     `source myvenv/bin/activate`

3. Install dependencies:  
   `pip install -r requirements.txt`

4. Run backend server:  
   `uvicorn main:app --reload`

### Frontend

1. Open another terminal and go to frontend folder:  
   `cd frontend`

2. Install dependencies:  
   `npm install`

3. Run the React app:  
   `npm start`

---

## Usage

- Open browser at `http://localhost:3000`  
- Upload your resume or edit the fields manually  
- Click "Enhance with AI" to improve sections  
- Save your resume data to backend  
- Download the resume as a JSON file  


