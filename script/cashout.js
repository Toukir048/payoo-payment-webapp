document.getElementById("cashout-btn").addEventListener('click', () => {
    //1)Get Agent Number
    const agentNumberInput = document.getElementById("agent-number");
    const agentNumber = agentNumberInput.value;

    if (agentNumber.length != 11) {
        alert("Invalid Agent Number");
        return;
    }

    //2)Get Amount 
    const sendAmountInput = document.getElementById("send-amount");
    const sendAmount = sendAmountInput.value;

    //3)Get Current Balance
    const mainBalance = document.getElementById("balance");
    const Balance = mainBalance.innerText;
    const newBalance = Number(Balance) - Number(sendAmount);
    //4)Calculate New Balance
    if (newBalance < 0) {
        alert("Insufficient Balance");
        return;
    }

    //5) check Pin
    const pinInput = document.getElementById("pin");
    const pin = pinInput.value;

    if (pin == '1234') {
        alert("Cashout Successful");
        mainBalance.innerText = newBalance;
    }
    else {
        alert("Invalid Pin !!!")
        return;
    }

});
