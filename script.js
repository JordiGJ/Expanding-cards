// get elemets
const cards = document.querySelectorAll('.card');

//functions
function removeActiveAndVisible() {
  cards.forEach(card => {
    card.classList.remove('active');
    card.querySelector('h3').classList.remove('visible');
  });
}
function addActiveAndVisible(card) {
  card.querySelector('h3').classList.add('visible');
  card.classList.add('active');
}
cards.forEach(card =>
  card.addEventListener('click', () => {
    removeActiveAndVisible();
    addActiveAndVisible(card);
  })
);
