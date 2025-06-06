function isCardNumberValid(number) {
	return number === '1234123412341234'
}

function displayError(msg) {
	document.querySelector('.errorMsg').innerHTML = msg
}

function submitHandler(event) {
	event.preventDefault()
	let errorMsg = ''

	console.log(this.cardNumber.value)
    
	displayError('')
    
	if (isNaN(this.cardNumber.value)) {
		errorMsg += 'Card number is not a valid number.\n'
	} 
    else if (!isCardNumberValid(this.cardNumber.value)) {
		errorMsg += 'Card number is not a valid card number.\n'
	}

    const expMonth = parseInt(this['exp-month'].value, 10);
    const expYear = parseInt(this['exp-year'].value, 10);
    const currentDate = new Date();

    if (isNaN(expMonth) || isNaN(expYear)) {
        errorMsg += 'Expiration date is not valid.\n';
    }
    else {
        const fullYear = expYear < 100 ? 2000 + expYear : expYear;

        const expDate = new Date(fullYear, expMonth - 1, 1);

        expDate.setMonth(expDate.getMonth() + 1);

        if (expDate <= currentDate) {
            errorMsg += 'Expiration date must be in the future.\n';
        }
    }

	if (errorMsg !== '') {
		displayError(errorMsg)
		return false
	}

    alert('Payment submitted!'); 
	return true
}

document.querySelector('#ccGrid').addEventListener('submit', submitHandler)