const url =
  "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/N8jE12XJo0QEuAY66uTz/scores/";
const container = document.getElementById("name-board");
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
  return storage;
};

const getScore = async () => {
  const res = await fetch(url);
  const storage = await res.json();
  const dataScores = storage.result;
  dataScores.forEach((item) => {
    const load = `<div class="flex">
                          
                          <li> ${item.user}: </li>
                          <li> ${item.score} </li>    
                      <div>`;

    container.innerHTML += load;
  });
};

export { sendData, getScore };
