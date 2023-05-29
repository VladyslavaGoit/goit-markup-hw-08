const buttons = document.querySelector('.portfolio__buttons');
const cards = document.querySelectorAll('.card');

buttons.addEventListener('click', filterCardsHandler);

function filterCardsHandler(e) {
  if (!e.target.classList.contains('portfolio__button')) {
    return;
  }

  [...cards].map(card => (card.style.display = 'flex'));
  const cardType = e.target.dataset.type;

  [...cards]
    .filter(card => card.dataset.type !== cardType)
    .map(card => (card.style.display = 'none'));
  if (cardType === 'all') {
    [...cards].map(card => (card.style.display = 'flex'));
  }
}
