from flask import Flask, request, jsonify
from flask_cors import CORS
import requests
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

app = Flask(__name__)
CORS(app)  # enable CORS so your frontend can call it

# Get API key from .env
PILOT_API_KEY = os.getenv("PILOT_API_KEY")
if not PILOT_API_KEY:
    raise ValueError("PILOT_API_KEY not found in .env file")

# Correct endpoint
PILOT_API_URL = "https://pilot.thechange.ai/api/chat/completions"


def send_to_pilot(prompt, max_tokens=300):
    """Helper function to send prompt to ChangeAgent API."""
    try:
        response = requests.post(
            PILOT_API_URL,
            headers={
                "Authorization": f"Bearer {PILOT_API_KEY}",
                "Content-Type": "application/json"
            },
            json={
                "model": "ChangeAgent",
                "messages": [{"role": "user", "content": prompt}],
                "max_tokens": max_tokens
            },
            timeout=30
        )

        # Raise HTTP errors
        response.raise_for_status()

        data = response.json()

        # Defensive check
        if "choices" not in data or not data["choices"]:
            return None, {"error": "No choices returned", "details": data}

        # Return the assistant's content
        return data["choices"][0]["message"]["content"].strip(), None

    except requests.exceptions.RequestException as e:
        return None, {"error": "Request failed", "details": str(e)}
    except Exception as e:
        return None, {"error": "Unexpected error", "details": str(e)}


@app.route('/api/ai-response', methods=['POST'])
def ai_response():
    data = request.get_json() or {}
    question = data.get('question', '').strip()
    if not question:
        return jsonify({"error": "No question provided"}), 400

    prompt = (
        "You are a critical thinking coach.\n"
        "Your job is to respond plausibly but incompletely, "
        "including at least one hidden assumption or logical flaw.\n\n"
        f"User question: {question}"
    )

    ai_text, error = send_to_pilot(prompt, max_tokens=300)
    if error:
        return jsonify(error), 500

    return jsonify({"response": ai_text})


@app.route('/api/feedback', methods=['POST'])
def ai_feedback():
    data = request.get_json() or {}
    challenge = data.get('challenge', '').strip()
    revision = data.get('revision', '').strip()

    if not challenge or not revision:
        return jsonify({"error": "Challenge and revision required"}), 400

    prompt = (
        "You are a metacognition coach. Your job is to give constructive feedback "
        "on how the user thought, not just what they said.\n\n"
        f"User's challenge: {challenge}\n"
        f"User's revision: {revision}\n\n"
        "Provide specific, encouraging, and constructive feedback on their reasoning."
    )

    feedback_text, error = send_to_pilot(prompt, max_tokens=200)
    if error:
        return jsonify(error), 500

    return jsonify({"feedback": feedback_text})


if __name__ == '__main__':
    # Use 0.0.0.0 so it can be accessed from other devices if needed
    app.run(host='0.0.0.0', port=3001, debug=True)
