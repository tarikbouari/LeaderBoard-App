
const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/N8jE12XJo0QEuAY66uTz/scores/';

const fetchUrl = async () => {

    const res = await fetch(
      "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/",
      {
        method: "POST",
        body: JSON.stringify({
            name: "Fifa Saison",
          }),
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
        });
        const storage = await res.json();
        console.log(storage);
      };
      
      export { fetchUrl, url };
      