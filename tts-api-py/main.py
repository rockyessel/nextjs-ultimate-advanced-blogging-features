import io
from gtts import gTTS
from fastapi import FastAPI
from fastapi.responses import StreamingResponse
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()

# Configure CORS settings
origins = [
   "http://localhost:3000",
    "localhost:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"message": "Hello World"}




@app.get("/tts") # text-to-speech
async def tts_(text: str):
    try:
        tts = gTTS(text)
        # Save the audio to a byte buffer
        audio_buffer = io.BytesIO()
        tts.write_to_fp(audio_buffer)

        # Move the buffer position to the beginning before reading
        audio_buffer.seek(0)
        
        return StreamingResponse(audio_buffer, media_type="audio/wav")
        
    except Exception as e:
        return {"error": str(e)}


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)