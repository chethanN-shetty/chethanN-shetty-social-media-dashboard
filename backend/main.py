from fastapi import FastAPI
from script_api import fetch_profile_data
from insights import generate_insights
from fastapi.middleware.cors import CORSMiddleware
import os

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def root():
    return {"message": "Backend running"}

@app.get("/profile/{username}")
def get_profile(username: str):
    return fetch_profile_data(username)

@app.get("/compare")
def compare_profiles(user: str, competitor: str):
    user_data = fetch_profile_data(user)
    competitor_data = fetch_profile_data(competitor)

    insights = generate_insights(user_data, competitor_data)

    return {
        "user": user_data,
        "competitor": competitor_data,
        "insights":insights
    }
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=int(os.environ.get("PORT", 8000)))
