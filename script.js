const userInput = document.getElementById('userInput');
const submitBtn = document.getElementById('submitBtn');
const aiResponse = document.getElementById('aiResponse');
const userChallenge = document.getElementById('userChallenge');
const userRevision = document.getElementById('userRevision');
const submitChallenge = document.getElementById('submitChallenge');
const aiFeedback = document.getElementById('aiFeedback');

// Replace with your own OpenAI API key (for prototype only)
const API_KEY = 'YOUR_OPENAI_API_KEY_HERE'; // ⚠️ Don't commit this!

// Function to call AI with a *provocative* prompt
async function getAIResponse(question) {
  const prompt = `
You are a critical thinking coach. Your job is to respond to the user's question in a way that is:
- Inquisitive questioning until satisfied
- Wanting to understand the fundamentals of the topic

User question: "${question}"

Respond as if you are a student asking the professor a question.
`;

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: prompt }],
        max_tokens: 300
      })
    });

    const data = await response.json();
    return data.choices[0].message.content.trim();
  } catch (error) {
    console.error('AI Error:', error);
    return "Sorry, I couldn't generate a response. Try again.";
  }
}

// Function to get AI feedback on user's thinking
async function getAIFeedback(challenge, revision) {
  const prompt = `
You are a metacognition coach. Your job is to give feedback on how the user thought, not what they said.

User's challenge: "${challenge}"
User's revision: "${revision}"

Give feedback on:
- Did they identify a real flaw or assumption?
- Did they justify their reasoning?
- Did they improve the original answer?
- What cognitive skill did they demonstrate?

Be specific, encouraging, and constructive.
`;

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: prompt }],
        max_tokens: 200
      })
    });

    const data = await response.json();
    return data.choices[0].message.content.trim();
  } catch (error) {
    console.error('Feedback Error:', error);
    return "I couldn't analyze your thinking. Try again.";
  }
}

// Event Listeners
submitBtn.addEventListener('click', async () => {
  const question = userInput.value.trim();
  if (!question) {
    alert('Please ask a question!');
    return;
  }

  aiResponse.textContent = 'Thinking...';
  const response = await getAIResponse(question);
  aiResponse.textContent = response;
});

submitChallenge.addEventListener('click', async () => {
  const challenge = userChallenge.value.trim();
  const revision = userRevision.value.trim();

  if (!challenge || !revision) {
    alert('Please complete both fields!');
    return;
  }

  aiFeedback.textContent = 'Analyzing your thinking...';
  const feedback = await getAIFeedback(challenge, revision);
  aiFeedback.textContent = feedback;
});