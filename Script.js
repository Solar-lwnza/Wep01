const chatBox = document.getElementById('chat-box');
const chatForm = document.getElementById('chat-form');
const userInput = document.getElementById('user-input');

chatForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const prompt = userInput.value.trim();
  if (!prompt) return;

  addMessage('user', prompt);
  userInput.value = '';

  // mock response แบบง่ายๆ
  setTimeout(() => {
    const reply = "นี่คือคำตอบจำลอง: " + prompt.split('').reverse().join('');
    addMessage('bot', reply);
  }, 500); // ดีเลย์ 0.5 วินาที เพื่อให้เหมือน AI ตอบ
});

function addMessage(sender, text) {
  const div = document.createElement('div');
  div.classList.add('message', sender);
  div.textContent = text;
  chatBox.appendChild(div);
  chatBox.scrollTop = chatBox.scrollHeight;
}