const chatBox = document.getElementById('chat-box');
const chatForm = document.getElementById('chat-form');
const userInput = document.getElementById('user-input');

chatForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const prompt = userInput.value.trim();
  if (!prompt) return;

  addMessage('user', prompt);
  userInput.value = '';

  // mock response
  setTimeout(() => {
    addMessage('bot', "นี่คือคำตอบจำลอง: " + prompt.split('').reverse().join(''));
  }, 500);
});

function addMessage(sender, text) {
  const div = document.createElement('div');
  div.classList.add('message', sender);
  div.textContent = text;
  chatBox.appendChild(div);
  chatBox.scrollTop = chatBox.scrollHeight;
}