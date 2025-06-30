from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

class Resume(BaseModel):
    name: str
    summary: str
    education: str
    skills: str
    experience: str

@app.post("/ai-enhance")
def enhance_section(data: dict):
    section = data.get("section")
    content = data.get("content", "")
    enhanced = f"{content} [Enhanced ✨]"
    return {"enhanced_content": enhanced}

@app.post("/save-resume")
def save_resume(resume: Resume):
    with open("resume_data.json", "w", encoding="utf-8") as f:
        import json
        json.dump(resume.dict(), f, indent=4)
    return {"message": "Resume saved"}
