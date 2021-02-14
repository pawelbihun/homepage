const CIRCLE = '<i class="far fa-circle"></i>';
const CROSS = '<i class="fas fa-times"></i>';

const board = document.querySelectorAll(".board__field");
let round = 1;

board.forEach((field) =>
  field.addEventListener("click", (event) => {
    const name = event.target.className;
    const target = `.${name.substring(13)}`;
    let player = round % 2;
    if (player === 0) {
      addSymbol(target, CROSS);
    } else {
      addSymbol(target, CIRCLE);
    }
    round++;
    showPlayer(round);
  })
);

function addSymbol(querySelectorContent, content) {
  const element = document.querySelector(querySelectorContent);
  element.innerHTML = content;
}
function showPlayer(roundNumber) {
  const info = document.querySelector(".player");
  let player = roundNumber % 2;
  if (player === 0) {
    info.innerHTML = `Aktuany gracz: ${CROSS}`;
  }
  else {
    info.innerHTML = `Aktuany gracz: ${CIRCLE}`
  }
}