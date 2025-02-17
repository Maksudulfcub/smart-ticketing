const buttons = document.querySelectorAll('.seat-button');

buttons.forEach(button => {
    button.addEventListener('click', (event) => {

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

        // Showing total price
        const perTicketPrice = 550;
        totalTicketPrice = newSelected * perTicketPrice;
        setTextByValue('total-price', totalTicketPrice);
        setTextByValue('grand-total', totalTicketPrice);

        // Apply coupon code
        const couponButton = getElementNameById('coupon-button');
        couponButton.addEventListener('click', function () {
            const couponInputField = getElementNameById('coupon-input');
            const couponInputValue = couponInputField.value;

            if (couponInputValue === 'NEW15') {
                const discountedPrice = totalTicketPrice - (totalTicketPrice * (15 / 100));
                setTextByValue('grand-total', discountedPrice);
            }
            else if (newSelected > 2 && couponInputValue === 'Couple20') {
                const coupleDiscountedPrice = totalTicketPrice - (totalTicketPrice * (20 / 100));
                setTextByValue('grand-total', coupleDiscountedPrice);
            }
            else {
                setTextByValue('grand-total', totalTicketPrice);
            }
        })

        // Maximum 4 tickets an user can select
        if (newSelected > 4) {
            button.removeEventListener('click');
            button.style.backgroundColor = 'none'
        }
        else {
            button.style.backgroundColor = 'green';
        }

        setTextByValue('selected-seat', newSelected);


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

        // Showing success modal
        const passengerName = getElementNameById('passenger-input')
        const passengerInputValue = passengerName.value.length;

        const passengerPhone = getElementNameById('phone-input');
        const phoneInputValue = passengerPhone.value.length;

        const nextButton = getElementNameById('next-button');
        const modalContainer = getElementNameById('modal-container');
        const mainContainer = getElementNameById('main-container');

        if (newSelected > 0 || passengerInputValue > 0 || phoneInputValue > 0) {
            nextButton.addEventListener('click', function () {
                mainContainer.classList.add = 'hidden'
                modalContainer.classList.remove = 'hidden';
            })
        }

    })
})