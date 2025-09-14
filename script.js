const boxes = document.querySelectorAll('.box');
const extraContent = document.getElementById('extraContent');
const extraText = document.getElementById('extraText');

let lastClicked = null;

boxes.forEach(box => {
  box.addEventListener('click', function(e) {
    e.preventDefault();
    const text = this.getAttribute('data-text');

    if (lastClicked === this && extraContent.classList.contains('show')) {
      // Klik tombol yang sama, sembunyiin
      extraContent.classList.remove('show');
      lastClicked = null;
    } else {
      // Ganti teks dan tampilkan
      extraText.textContent = text;
      extraContent.classList.add('show');
      lastClicked = this;
    }
  });
});
