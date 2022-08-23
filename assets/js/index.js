
const playerListArray = [];
function btnSelect(element){
        let playerName = element.parentNode.children[1].innerText;
        playerListArray.push(playerName);
           const ol = document.getElementById('order-list')
            ol.innerText = '';
            var length = playerListArray.length;
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
    const perPlayerCostField = document.getElementById('per-player-Expence-field');
    const perPlayerCostString = perPlayerCostField.value;
    const perPlayerCost = parseInt(perPlayerCostString);
    

    const playerExpenseTotal = document.getElementById('per-player-total-expence');
    const playerTotalExpenceString = playerExpenseTotal.innerText;
    const playerTotalExpence = parseInt(playerTotalExpenceString);

    // console.log(playerTotalExpence);
    let numberOfPlayer = document.getElementById("order-list").children.length;

    //set player expense
    const newPlayerExpenseTotal = perPlayerCost * numberOfPlayer;
    setTextElementValueById('per-player-total-expence', newPlayerExpenseTotal);

})

document.getElementById('btn-calculate-total').addEventListener('click', function () {
    // Player Expense
    const playerExpenseText = document.getElementById('per-player-total-expence');
    const perPlayerExpenseString = playerExpenseText.innerText;
    const perPlayerExpense = parseFloat(perPlayerExpenseString);

    // console.log(perPlayerExpense);


    // Manager
    const managerCostField = document.getElementById('manager-expence-field');
    const perManagerCostString = managerCostField.value;
    const perManagerCost = parseFloat(perManagerCostString);
    // console.log(perManagerCost);

    // Coach
    const coachCostField = document.getElementById('coach-expence-filed');
    const perCoachCostString = coachCostField.value;
    const perCoachCost = parseFloat(perCoachCostString);



    //get total
    const playerExpenseTotalText = document.getElementById('total-expence');
    const PlayerExpenseTotalString = playerExpenseTotalText.innerText;
    const totalExpense = parseFloat(PlayerExpenseTotalString);
    // console.log(totalExpense);
    // Calculate total

    const newExpenseTotal = perPlayerExpense + perManagerCost + perCoachCost;

    // playerExpenseTotalText.innerText = newExpenseTotal;

    setTextElementValueById('total-expence', newExpenseTotal);


 })

 function setTextElementValueById(elementId, newValue) {
    const textElement = document.getElementById(elementId);

    textElement.innerText = newValue;

}