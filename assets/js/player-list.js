const playerListArray = [];
function display(selectedPlayer){
     const ol = document.getElementById('order-list')
     ol.innerText = '';
     for(let i = 0; i < selectedPlayer.length; i++){
         let name = playerListArray[i];
         const li = document.createElement('li');
         li.innerText = `${name}`
         ol.appendChild(li);
     }
}

function btnSelect(element){

    let playerName = element.parentNode.children[1].innerText;

    playerListArray.push(playerName);
    display(playerListArray);
    
}
