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

// Utility function to validate donation input
function validateDonation(amount, currentBalance) {
    if (!amount) {
        alert("Please enter a donation amount.");
        return false;
    }
    
    let numericValue = parseFloat(amount);
    
    if (isNaN(numericValue) || numericValue <= 0) {
        alert("Please enter a valid positive number.");
        return false;
    }
    
    if (numericValue > currentBalance) {
        alert("Insufficient balance. Please enter a smaller amount.");
        return false;
    }

    return true;
}