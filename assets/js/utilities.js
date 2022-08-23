function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = ""; 
    return inputFieldValue;
}

function getElementTextById(elementId){
    const elementText = document.getElementById(elementId)
    const elementTextString = elementText.innerText;
    const newElementText = parseFloat(elementTextString);
    elementText.value = '';
    return newElementText;
}

function setTextElementValueById(elementId, newValue){
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}