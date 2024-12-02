// console.log('add money file');

document.getElementById('btn-add-money')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const addMoney = document.getElementById('input-add-Money').value;
        const addMoneyNumber = parseFloat(addMoney);
        const pinNumber = document.getElementById('input-pin-number').value;
        console.log(addMoney, pinNumber);

        // Wrong way to verify pin
        if (pinNumber === '1234') {
            const balance = document.getElementById('account-balance').innerText;
            const balanceNumber = parseFloat(balance);

            const newBalance = balanceNumber + addMoneyNumber;

            document.getElementById('account-balance').innerText = newBalance;
            // console.log(balance);

        }
        else {
            alert('Failed To Add money ! Please Try Again Later.')
        }

    });


