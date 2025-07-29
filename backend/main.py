from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # O pon ["http://localhost:5173"] para más seguridad
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

POSTS = [
    {
        "id": 1,
        "title": "My Journey into Programming",
        "content": "I started programming at age 16, exploring Python, now improving since i have been doing a Programming career...", 
        "date": "2025-07-29"
    },
    # ...más posts...
]

@app.get("/api/posts")
def get_posts():
    return POSTS