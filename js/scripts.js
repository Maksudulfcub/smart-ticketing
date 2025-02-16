const buttons = document.querySelectorAll('.seat-button');

buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        button.style.backgroundColor = 'green';
        // Increase total seat left
        const totalSeat = getElementNameById('seat-amount');
        const totalSeatText = totalSeat.innerText;
        const totalSeatNumber = parseInt(totalSeatText);
        const updatedSeat = totalSeatNumber - 1;
        totalSeat.innerText = updatedSeat;

        // Decrease selected ticket amount
        
    })
})