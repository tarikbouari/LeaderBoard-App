
const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/N8jE12XJo0QEuAY66uTz/scores/';

const fetchUrl = async () => {

    const res = await fetch(
      "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/",
      {
        method: "POST",