// redirect to FAQ page
function toFAQpage() {
    window.location.href = "FAQ.html";
}

// donation button
document.getElementById("show-donation").addEventListener('click', function(){
    document.getElementById("remove-donation-section").classList.remove('hidden');

    document.getElementById("block-history").classList.add('hidden');

    document.getElementById("show-donation").classList.add('bg-primary');
    document.getElementById("show-donation").classList.remove('border');
    document.getElementById("show-donation").classList.remove('border-textSecondary');
    document.getElementById("show-donation").classList.remove('text-textSecondary');
    document.getElementById("show-donation").classList.add('text-textPrimary');

    document.getElementById("show-history").classList.remove('bg-primary');
    document.getElementById("show-history").classList.add('border');
    document.getElementById("show-history").classList.add('border-textSecondary');
    document.getElementById("show-history").classList.add('text-textSecondary');
    document.getElementById("show-history").classList.remove('text-textPrimary');
});

// history button
document.getElementById("show-history").addEventListener('click', function(){
    document.getElementById("block-history").classList.remove('hidden');

    document.getElementById("remove-donation-section").classList.add('hidden');

    document.getElementById("show-history").classList.add('bg-primary')
    document.getElementById("show-history").classList.remove('border');
    document.getElementById("show-history").classList.remove('border-textSecondary');
    document.getElementById("show-history").classList.remove('text-textSecondary');
    document.getElementById("show-history").classList.add('text-textPrimary');

    document.getElementById("show-donation").classList.remove('bg-primary');
    document.getElementById("show-donation").classList.add('border');
    document.getElementById("show-donation").classList.add('border-textSecondary');
    document.getElementById("show-donation").classList.add('text-textSecondary');
    document.getElementById("show-donation").classList.remove('text-textPrimary');
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