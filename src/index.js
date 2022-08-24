import "./style.css";
import { url } from "./game.js";

const refresh = document.getElementById("refresh");
const submit = document.getElementById("submit");
const container = document.getElementById("name-board");
const nameInput = document.getElementById("name");
const form = document.getElementById("form");
const scoreInput = document.getElementById("score");

const renderScore = () => {
  const data = JSON.parse(localStorage.getItem("data")) || [];

  data.forEach((item) => {
    const load = `<div class="flex"> 
                        <h3> ${item.playerName}:<h3>
                        <h3 class="child">${item.score}<h3>
                    <div>`;

    container.innerHTML += load;
  });
};

submit.addEventListener("click", (e) => {
  e.preventDefault();
  const nameInpute = nameInput.value;
  const scoreInpute = scoreInput.value;

  if ((nameInpute && scoreInpute) === "") return "value missing";
  // const newData = new Scores(nameInpute, scoreInpute);
  // newData.addScore();
  sendData({ 
    "user": nameInpute,
    "score": scoreInpute,
  });
  // container.innerHTML = '';
  // renderScore();
  form.reset();
  return e;

});