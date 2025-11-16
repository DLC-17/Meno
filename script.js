// script.js — polished frontend for Think Deeper AI

const userInput = document.getElementById('userInput');
const submitBtn = document.getElementById('submitBtn');
const aiResponse = document.getElementById('aiResponse');
const userChallenge = document.getElementById('userChallenge');
const userRevision = document.getElementById('userRevision');
const submitChallenge = document.getElementById('submitChallenge');
const aiFeedback = document.getElementById('aiFeedback');

/**
 * Fetch AI response from backend
 */
async function getAIResponse(question) {
  try {
    const response = await fetch('http://localhost:3001/api/ai-response', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Unknown backend error');
    }

    const data = await response.json();
    return data.response;

  } catch (error) {
    console.error('❌ AI Response Error:', error);
    return "⚠️ Could not get a response. Check if backend is running.";
  }
}

/**
 * Fetch AI feedback from backend
 */
async function getAIFeedback(challenge, revision) {
  try {
    const response = await fetch('http://localhost:3001/api/feedback', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ challenge, revision }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Unknown backend error');
    }

    const data = await response.json();
    return data.feedback;

  } catch (error) {
    console.error('❌ Feedback Error:', error);
    return "⚠️ Could not analyze your thinking. Check if backend is running.";
  }
}

/**
 * Event: User asks a question
 */
submitBtn.addEventListener('click', async () => {
  const question = userInput.value.trim();
  if (!question) {
    alert('Please ask a question!');
    return;
  }

  // Disable button while waiting
  submitBtn.disabled = true;
  aiResponse.textContent = '🤔 Thinking...';

  const response = await getAIResponse(question);

  aiResponse.textContent = response;
  submitBtn.disabled = false;
});

/**
 * Event: User submits challenge + revision
 */
submitChallenge.addEventListener('click', async () => {
  const challenge = userChallenge.value.trim();
  const revision = userRevision.value.trim();

  if (!challenge || !revision) {
    alert('Please complete both fields!');
    return;
  }

  // Disable button while waiting
  submitChallenge.disabled = true;
  aiFeedback.textContent = '🔎 Analyzing your thinking...';

  const feedback = await getAIFeedback(challenge, revision);

  aiFeedback.textContent = feedback;
  submitChallenge.disabled = false;
});
