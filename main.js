//DOM Elements
const modal = document.querySelector('#my-modal');
const modalBtn = document.querySelector('#modal-btn');
const closeBtn = document.querySelector('.close');

// Eventos Listeners
modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

// Abrir modal
function openModal() {
  modal.style.display = 'block';
}

// fechar modal
function closeModal() {
  modal.style.display = 'none';
}

// Fechar em caso de click fora 
function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}
