// console.log('sports db connected');

const loadPlayer = () => {
    fetch('https://www.thesportsdb.com/api/v1/json/2/all_sports.php')
        .then(res => res.json())
        .then(data => displayPlayer(data.sports))
    // .then(data => console.log(data.sports))
}

const displayPlayer = sports => {
    console.log(sports);
    const playerPontainer = document.getElementById('player-container');
    sports.forEach(sport => {
        console.log(sport);
        const playerDiv = document.createElement('div');
        // playerDiv.className = 'player-view';
        playerDiv.innerHTML = `
    <h4 class="text-primary fw-bold"> ${sport.strFormat} </h4>
    
    <p style="margin-top:20px;">id: ${sport.idSport}</p>
    <img  class="img-fluid" src=${sport.strSportThumb}>
    <p style="">Description: ${sport.strSportDescription.slice(0, 200)}</p>
    
    
    
    `;
        playerPontainer.appendChild(playerDiv);
    })

}

loadPlayer();