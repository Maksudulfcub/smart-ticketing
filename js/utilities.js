function getElementNameById(elementId) {
    const element = document.getElementById(elementId);
    return element;
}

function setBgColorById(elementId) {
    const element = document.getElementById(elementId);
    element.style.backgroundColor = 'green';
}

function removeBgColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove = 'bg-green-500';
}

function getElementTextValueById(elementId) {
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    return value;
}

function setTextByValue(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
}