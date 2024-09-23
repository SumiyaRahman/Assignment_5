// redirect to FAQ page
function toFAQpage() {
    window.location.href = "FAQ.html";
}

// donation button
document.getElementById("show-donation").addEventListener('click', function(){
    document.getElementById("remove-donation-section").classList.remove('hidden');

    document.getElementById("block-history").classList.add('hidden');
});

// history button
document.getElementById("show-history").addEventListener('click', function(){
    document.getElementById("block-history").classList.remove('hidden');

    document.getElementById("remove-donation-section").classList.add('hidden');
});

// add noa money
document.getElementById('donate-btn').addEventListener('click', function(event){
    event.preventDefault();

    // get input value
    let donationValue = document.getElementById("donation-value").value;
    
    // get current amount
    let noaTotal = document.getElementById("noa-total").innerText;
    
    // get input value + get current value
    let newNoaTotal = parseFloat(donationValue) + parseFloat(noaTotal);

    // update the balance
    document.getElementById("noa-total").innerText = newNoaTotal;

    // total balance decrease
    let totalBalance = document.getElementById("total-balance").innerText;
    
    let newTotalBalance = parseFloat(totalBalance) - parseFloat(donationValue);

    // update total balance
    document.getElementById("total-balance").innerText = newTotalBalance;
})