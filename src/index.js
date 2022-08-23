import './style.css';
import Scores from './functionaliies.js'; 


Scores;
const refresh = document.getElementById('refresh');
const submit = document.getElementById('submit');
const container = document.getElementById('name-board');

const renderScore = () => {
    const data = JSON.parse(localStorage.getItem('data')) || [];

    data.forEach( (item,index) => {
        let load = `<div class="flex"> 
                        <h3> ${item.playerName}<h3>
                        <h3>${item.score}<h3>
                    <div>`
                    item.index++;

           container.innerHTML+= load;        
    })

}

submit.addEventListener('click',(e) =>)

