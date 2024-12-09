document.getElementById('btn-add-money').addEventListener('click', function (event) {
    event.preventDefault();

    const addMoney = document.getElementById('input-add-money').value;

    const addMoneyNumber = parseFloat(addMoney);

    const pinNumber = document.getElementById('input-pin-number').value;

    console.log(addMoney, pinNumber);

    // wrong way to verify pin
    if (pinNumber === '1234') {
        const balance = document.getElementById('account-balance').innerText;

        const balanceNumber = parseFloat(balance);

        // adding balance
        const newBalance = balanceNumber + addMoneyNumber;
        // set the new-balance in innerText to get value
        document.getElementById('account-balance').innerText = newBalance;
        console.log(balance);
    }
    else {
        alert('Failed To Add Money.! Please Try Again');
    }
})