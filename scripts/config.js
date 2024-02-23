function openPlayerConfig(event) {
  const selectedPlayerId = event.target.dataset.playerid;
  editedPlayer = selectedPlayerId
  playerConfigOverlayElement.style.display = "block";
  backdropElement.style.display = "block";
}

function closePlayerConfig() {
  playerConfigOverlayElement.style.display = "none";
  backdropElement.style.display = "none";
  formElement.firstElementChild.classList.remove("error");
  errorsOutputElement.textContent = "";
  formElement.firstElementChild.lastElementChild.value = ''
}

function savePlayerConfig(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const enteredPlayername = formData.get("playername").trim();
  console.log(enteredPlayername);

  if (!enteredPlayername) {
    event.target.firstElementChild.classList.add("error");
    errorsOutputElement.textContent = "Please enter a valid name!";
    return;
  }

  const updatedPlayerDataElement = document.getElementById('player-' + editedPlayer + '-data')
  updatedPlayerDataElement.children[1].textContent = enteredPlayername

//   if (editedPlayer ===1 ){
//     player[0].name = enteredPlayername
// } else {
//   player[1].name = enteredPlayername
// }

players[editedPlayer - 1].name = enteredPlayername
closePlayerConfig()
}
