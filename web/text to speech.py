import openai
import sounddevice as sd
import soundfile as sf

# Set up OpenAI API credentials
openai.api_key = "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"

# Set up text-to-speech parameters
voice = "jack"
text = "buddy"
sample_rate = 44100
duration_s = 5

# Generate audio from text using OpenAI API
response = openai.Completion.create(
    engine="text-davinci-002",
    prompt=f"Please say '{text}' in a {voice} voice.",
    max_tokens=1024,
    n=1,
    stop=None,
    temperature=0.5,
)
audio_data = response.choices[0].audio

# Save audio to file
filename = "output.wav"
sf.write(filename, audio_data, sample_rate)

# Play audio using sounddevice library
data, samplerate = sf.read(filename)
sd.play(data, samplerate)
status = sd.wait()
