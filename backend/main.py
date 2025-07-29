from fastapi import FastAPI, HTTPException, Header
from fastapi.middleware.cors import CORSMiddleware
import json
from pathlib import Path
import os
from dotenv import load_dotenv

load_dotenv()  # Carga variables de entorno desde un archivo .env si existe

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # O pon ["http://localhost:5173"] para más seguridad
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Si el archivo token.env está en la carpeta raíz del proyecto, carga explícitamente desde allí:
load_dotenv(dotenv_path=Path(__file__).parent.parent / "token.env")
ADMIN_TOKEN = os.getenv("ADMIN_TOKEN")  # Usa variable de entorno o valor por defecto

POSTS_FILE = Path(__file__).parent / "posts.json"

def load_posts():
    if POSTS_FILE.exists():
        with open(POSTS_FILE, encoding="utf-8") as f:
            return json.load(f)
    return []

def save_posts(posts):
    with open(POSTS_FILE, "w", encoding="utf-8") as f:
        json.dump(posts, f, indent=2, ensure_ascii=False)

@app.get("/api/posts")
def get_posts():
    try:
        return load_posts()
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error retrieving posts: {str(e)}")

@app.post("/api/posts")
def add_post(post: dict, authorization: str = Header(None)):
    if authorization != f"Bearer {ADMIN_TOKEN}":
        raise HTTPException(status_code=401, detail="Unauthorized")
    posts = load_posts()
    post["id"] = max([p["id"] for p in posts], default=0) + 1
    posts.append(post)
    save_posts(posts)
    return {"message": "Post added", "post": post}

@app.delete("/api/posts/{post_id}")
def delete_post(post_id: int, authorization: str = Header(None)):
    if authorization != f"Bearer {ADMIN_TOKEN}":
        raise HTTPException(status_code=401, detail="Unauthorized")
    posts = load_posts()
    for i, p in enumerate(posts):
        if p["id"] == post_id:
            posts.pop(i)
            save_posts(posts)
            return {"message": "Post deleted"}
    raise HTTPException(status_code=404, detail="Post not found")