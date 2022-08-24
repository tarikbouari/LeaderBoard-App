import "./style.css";
import { url } from "./game.js";

const refresh = document.getElementById("refresh");
const submit = document.getElementById("submit");
const container = document.getElementById("name-board");
const nameInput = document.getElementById("name");
const form = document.getElementById("form");
const scoreInput = document.getElementById("score");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  if ((nameInput.value && scoreInput.value) === "") return "value missing";
  sendData({
    user: nameInput.value,
    score: scoreInput.value,
  });
  form.reset();
  return e;
});

const sendData = async (array) => {
  const res = await fetch(url, {
    method: "Post",
    body: JSON.stringify(array),

    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
  const storage = await res.json();
  console.log(storage);
};

const getScore = async () => {
  const res = await fetch(url);
  const storage = await res.json();
  const dataScores = storage.result;
  dataScores.forEach((item) => {
    const load = `<div class="flex"> 
                        <li> ${item.user}: ${item.score}</li>
                    <div>`;

    container.innerHTML += load;
  });
};

getScore();

refresh.addEventListener("click", () => {
  container.innerHTML ='';
  getScore();
});
