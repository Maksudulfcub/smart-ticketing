const buttons = document.querySelectorAll('.seat-button');

buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        button.style.backgroundColor = 'green';
        // Decrease total seat left
        const totalSeat = getElementNameById('seat-amount');
        const totalSeatText = totalSeat.innerText;
        const totalSeatNumber = parseInt(totalSeatText);
        const updatedSeat = totalSeatNumber - 1;
        totalSeat.innerText = updatedSeat;

        // Increase selected ticket amount
        // const totalSelectedSeat = document.getElementById('selected-seat');
        // const selectedSeatText = totalSelectedSeat.innerText;
        // const selectedSeatNumber = parseInt(selectedSeatText);
        // const newSelectedSeat = selectedSeatNumber + 1;
        // totalSelectedSeat.innerText = newSelectedSeat;
        const selectedSeat = getElementTextValueById('selected-seat');
        const newSelected = selectedSeat + 1;
        setTextByValue('selected-seat', newSelected);

        // Showing total price
        const perTicketPrice = 550;
        totalTicketPrice = newSelected * perTicketPrice;
        setTextByValue('total-price', totalTicketPrice);

        // Showing seat details
        const seatNameContainer = getElementNameById('seat-name');
        const seatName = document.createElement('p')
        seatName.innerText = event.target.innerText;
        seatNameContainer.appendChild(seatName);

        const seatClassContainer = getElementNameById('seat-class');
        const seatClass = document.createElement('p')
        seatClass.innerText = 'Economy';
        seatClassContainer.appendChild(seatClass);

        const seatPriceContainer = getElementNameById('seat-price');
        const seatPrice = document.createElement('p')
        seatPrice.innerText = perTicketPrice;
        seatPriceContainer.appendChild(seatPrice);
    })
})