# Meno
Think deeper, think Critically

🧠 AI Think Provoker — A Tool to Force Deep Thinking
“Don’t ask AI for answers — ask it to challenge your thinking.” 

This web app uses AI not as an oracle, but as a Socratic provocateur — forcing users to question assumptions, justify reasoning, and revise their own thinking.

🎯 Mission: Cultivate critical thinking in the age of AI by making users think harder, not just get faster answers.

🚀 Demo
👉 Live Demo (Coming Soon)
(Deploy your own using the instructions below!)

📷 Screenshot
AI Think Provoker Screenshot

(Replace with actual screenshot after you build it!)

💡 Core Features
✅ AI as Devil’s Advocate — Generates plausible but flawed responses to provoke critical thinking
✅ User Challenge Phase — Identify assumptions, gaps, or errors in AI’s answer
✅ Revision Mode — Rewrite or improve the AI’s response
✅ Metacognitive Feedback — AI reflects on how you thought, not just what you said
✅ Simple, Clean UI — Built for focus, not distraction
✅ Secure API Key Handling — Uses .env or backend proxy — never exposed in browser

🛠️ Tech Stack
Frontend: HTML, CSS, JavaScript (Vanilla or Vite)
AI Backend: OpenAI GPT-3.5-turbo (or Mistral via Hugging Face)
Environment: .env + Vite (local dev) or Node.js proxy (production)
Hosting: Vercel, GitHub Pages, or Netlify
Security: API keys never exposed client-side
📦 Getting Started
Prerequisites
Node.js (v18+)
npm or yarn
OpenAI API Key (get one here )
📁 Option 1: Local Dev with Vite + .env
bash

Collapse
Save
Copy
1
2
3
4
5
6
7
8
9
10
11
12
# Clone repo
git clone https://github.com/yourusername/ai-think-provoker.git
cd ai-think-provoker

# Install dependencies
npm install

# Create .env file
echo "VITE_OPENAI_API_KEY=your_api_key_here" > .env

# Start dev server
npm run dev
🌐 Open http://localhost:5173 — you’re ready to think deeper! 

📁 Option 2: Production with Backend Proxy
bash

Collapse
Save
Copy
1
2
3
4
5
6
7
8
9
10
11
12
# Clone repo
git clone https://github.com/yourusername/ai-think-provoker.git
cd ai-think-provoker

# Start backend proxy
cd backend
npm install
node index.js

# Start frontend (in another terminal)
cd ..
npm run dev
🌐 Frontend runs on http://localhost:5173 → calls backend on http://localhost:3001 

🔐 Security Note
⚠️ Never commit .env to Git!
Add .env to .gitignore: 

bash

Collapse
Save
Copy
1
echo ".env" >> .gitignore
For public deployments, always use a backend proxy to hide your API key.

🧪 Example Prompts to Try
“Should schools ban cell phones?”
“Is AI going to replace all jobs?”
“Is capitalism the best economic system?”
“Should we tax robots?”
👉 Watch how AI responds — then challenge it!

🧩 Future Roadmap

Add “Devil’s Advocate” toggle

Save user thinking history

Add educator dashboard

Mobile app version (React Native / Flutter)

Integrate with Notion or Obsidian

Gamification: badges for “Assumption Hunter”, “Logic Ninja”
🤝 Contributing
We welcome contributions! Whether you’re a developer, educator, or critical thinker — your input matters.

Fork the repo
Create your feature branch (git checkout -b feature/AmazingIdea)
Commit your changes (git commit -am 'Add some amazing feature')
Push to the branch (git push origin feature/AmazingIdea)
Open a Pull Request
📄 License
This project is licensed under the MIT License — see the LICENSE file for details.

🙏 Acknowledgments
Inspired by the Socratic Method and metacognitive learning
Built with ❤️ for students, educators, and lifelong learners
Designed to resist AI complacency — not replace human thought
📬 Contact
Have questions? Want to collaborate?
👉 [Your Email] | [Twitter/X] | [LinkedIn]

🌟 Think deeper. Question harder. Revise boldly.
— AI Think Provoker Team 

📌 Quick Start Checklist
✅ Clone repo
✅ Get OpenAI API key
✅ Set up .env or backend proxy
✅ Run npm run dev
✅ Ask AI a question — then challenge it!
✅ Deploy to Vercel or Netlify (optional)

🚀 Deploy Your Own
Deploy with Vercel

(Replace yourusername with your GitHub username)

📚 Learn More
OpenAI API Docs
Vite Documentation
Critical Thinking Frameworks
You’re not just building an app — you’re building a cognitive gym. Let’s make thinking harder, not easier. 💪🧠