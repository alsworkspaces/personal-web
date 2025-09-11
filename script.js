const button = document.getElementById('enterBtn');
const input = document.getElementById('textInput');

button.addEventListener('click', () => {
  alert(`You typed: ${input.value}`);
  input.value = ''; // Kosongkan input
});
