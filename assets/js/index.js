
const playerListArray = [];
function btnSelect(element){
        let playerName = element.parentNode.children[1].innerText;
        playerListArray.push(playerName);
           const ol = document.getElementById('order-list')
            ol.innerText = '';
            let length = playerListArray.length;
            for(let i = 0; i < playerListArray.length; i++){
                    let name = playerListArray[i];
                    const li = document.createElement('li');
                     li.innerText = `${name}`;
                    ol.appendChild(li);
                    element.disabled = true;
                   if(document.getElementById('order-list').childElementCount == 5){
                    alert('Can not select more than five');
                    return false;
                   }
                    
            }
 }
                            

 document.getElementById('btn-calculate').addEventListener('click', function () {
    const perPlayerCost = getInputValueById('per-player-Expence-field');
    
    const playerTotalExpence  = getElementTextById('per-player-total-expence');

    let numberOfPlayer = document.getElementById("order-list").children.length;

    //set player expense
    const newPlayerExpenseTotal = perPlayerCost * numberOfPlayer;
    setTextElementValueById('per-player-total-expence', newPlayerExpenseTotal);

})

document.getElementById('btn-calculate-total').addEventListener('click', function () {
    // Player Expense
    const perPlayerExpense  = getElementTextById('per-player-total-expence');

    // Manager
    const perManagerCost = getInputValueById('manager-expence-field');

    // Coach
    const perCoachCost = getInputValueById('coach-expence-filed');

    //get total
    const newExpenseTotal = perPlayerExpense + perManagerCost + perCoachCost;

    setTextElementValueById('total-expence', newExpenseTotal);


 })

