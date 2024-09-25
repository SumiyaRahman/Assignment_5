function getInputValue(id) {
    const inputValue = document.getElementById(id).value;
    if(inputValue <= 0 || isNaN(inputValue) || inputValue === ''){
        return -1;
    }
    return inputValue;
}

function getInnerText(id) {
    const money_cnt = document.getElementById(id).innerText;
    return money_cnt;
}

function showHistory(history, amount, title_text){
    let currentDate = new Date().toString(); 
    history.innerHTML += `
        <div class="space-y-4 border p-8 rounded-lg">
            <h3 class="font-bold text-xl text-textPrimary">${amount} Taka is Donated for ${title_text}</h3>
            <p class="font-light text-base">Date: ${currentDate}</p> <!-- Display the date here -->
        </div>`;
}

function validateDonation(amount, currentBalance) {
    const val = parseFloat(currentBalance) - parseFloat(amount);
    if(val < 0){
        return false;
    }
    return true;
}