Think Deeper AI

Think Deeper AI is an interactive web app that helps users practice critical thinking. Users ask a question, receive an AI-generated answer with intentional flaws, and then challenge and revise the AI’s response. The AI provides feedback on the user’s reasoning, fostering metacognitive skills.

🧩 Features

Ask a question: Receive a plausible but flawed AI response.

Challenge the AI: Identify flaws, assumptions, or gaps in reasoning.

Revise the answer: Improve or correct the AI’s response.

AI feedback: Get constructive feedback on your reasoning and metacognition.

Responsive UI: Works across desktop and mobile.

🚀 Tech Stack

Frontend: HTML, CSS, JavaScript

Backend: Python, Flask

API: Change Agent (pilot.thechange.ai)

Environment management: .env file for API keys

CORS support: Enabled for local development

⚙️ Setup Instructions
1. Clone the repository
git clone https://github.com/yourusername/think-deeper-ai.git
cd think-deeper-ai

2. Create a Python environment
python -m venv venv
source venv/bin/activate   # macOS/Linux
venv\Scripts\activate      # Windows

3. Install dependencies
pip install -r requirements.txt


requirements.txt should include:

Flask
flask-cors
requests
python-dotenv

4. Add your API key

Create a .env file in the root directory:

PILOT_API_KEY=your_change_agent_api_key_here

5. Run the backend
python app.py


The backend will run at: http://localhost:3001

6. Open the frontend

Open index.html in your browser.

Enter a question and click "Ask Question"

Review the AI response

Enter your challenge and revision, then click "Submit Your Thinking"

View AI feedback

🔧 Project Structure
think-deeper-ai/
│
├─ app.py               # Flask backend
├─ script.js            # Frontend JavaScript
├─ style.css            # Frontend CSS
├─ index.html           # Frontend HTML
├─ requirements.txt     # Python dependencies
└─ .env                 # API key (not committed)

⚠️ Notes

Make sure your backend is running before interacting with the frontend.

Use the correct API endpoint: https://pilot.thechange.ai/api/chat/completions

Use ChangeAgent as the model in API requests.

Enable CORS for local development; it is already handled in app.py.

🎯 Future Improvements

Add loading spinners and visual indicators for asynchronous requests

Save previous sessions and user challenges for review

Improve UI with responsive layouts using Tailwind or another framework

Deploy backend to a cloud provider for public access

📜 License

MIT License – feel free to use, modify, or distribute.