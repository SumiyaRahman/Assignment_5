function getInputValue(id) {
    let inputValue = document.getElementById(id).value;
    return inputValue;
}

function getInnerText(id) {
    let money_cnt = document.getElementById(id).innerText;
    return money_cnt;
}

function showHistory(history, amount, title_text){
    let currentDate = new Date().toString(); // Get the current date and time in the required format
    history.innerHTML += `
        <div class="space-y-4 border p-8 rounded-lg">
            <h3 class="font-bold text-xl text-textPrimary">${amount} Taka is Donated for ${title_text}</h3>
            <p class="font-light text-base">Date: ${currentDate}</p> <!-- Display the date here -->
        </div>`;
}

function validateDonation(amount, currentBalance) {
    // Remove any extra spaces around the input
    amount = amount.trim();

    // Check if the input is empty
    if (!amount) {
        alert("Please enter a donation amount.");
        return false;
    }

    // Use a regular expression to ensure the input is a valid integer
    if (!/^\d+$/.test(amount)) {
        alert("Please enter a valid positive integer.");
        return false;
    }

    // Convert the input to an integer
    let numericValue = parseInt(amount,10);

    // Ensure the donation is greater than 0
    if (numericValue <= 0) {
        alert("Please enter a positive amount.");
        return false;
    }

    // Ensure the donation is not greater than the current balance
    if (numericValue > currentBalance) {
        alert("Insufficient balance. Please enter a smaller amount.");
        return false;
    }

    return true;
}
