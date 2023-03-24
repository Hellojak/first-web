import openai
openai.api_key = "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"
# Example using the GPT-3 endpoint to generate text
prompt = "what is your name"
model = "text-davinci-002"
response = openai.Completion.create(
    engine=model,
    prompt=prompt,
    max_tokens=500
)
generated_text = response.choices[0].text
print(generated_text)
