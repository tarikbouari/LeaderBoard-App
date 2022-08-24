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