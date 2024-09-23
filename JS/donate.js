let history = document.getElementById("block-history");
// redirect to FAQ page
function toBlogPage() {
    window.location.href = "blog.html";
}
function toHomePage(){
    window.location.href = "index.html";
}
// donation button
document.getElementById("show-donation").addEventListener('click', function(event){
    event.preventDefault();
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
document.getElementById("show-history").addEventListener('click', function(event){
    event.preventDefault();
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
    let donationValue = getInputValue("donation-value");
    
    // get current amount
    let noaTotal = getInnerText("noa-total");
    
    // get input value + get current value
    let newNoaTotal = parseFloat(donationValue) + parseFloat(noaTotal);

    // update the balance
    document.getElementById("noa-total").innerText = newNoaTotal;

    // total balance decrease
    let totalBalance = getInnerText("total-balance");
    
    let newTotalBalance = parseFloat(totalBalance) - parseFloat(donationValue);

    // update total balance
    document.getElementById("total-balance").innerText = newTotalBalance;

    // showing donation history
    let noaTitle = document.getElementById("noa-title").innerText;

    showHistory(history, donationValue, noaTitle)
    
})

// add feni money
document.getElementById('feni-donate-btn').addEventListener('click', function(event){
    event.preventDefault();

    // get input value
    let feniDonationValue = getInputValue("feni-donation-value");
    
    // get current amount
    let feniTotal = getInnerText("feni-total");
    
    // get input value + get current value
    let newFeniTotal = parseFloat(feniDonationValue) + parseFloat(feniTotal);

    // update the balance
    document.getElementById("feni-total").innerText = newFeniTotal;

    // total balance decrease
    let totalBalance = getInnerText("total-balance");
    
    let newTotalBalance = parseFloat(totalBalance) - parseFloat(feniDonationValue);

    // update total balance
    document.getElementById("total-balance").innerText = newTotalBalance;

    // showing donation history
    let feniTitle = document.getElementById("feni-title").innerText;

    showHistory(history, feniDonationValue, feniTitle);
});

// add quota money
document.getElementById('quota-donate-btn').addEventListener('click', function(event){
    event.preventDefault();

    // get input value
    let quotaDonationValue = getInputValue("quota-donation-value");
    
    // get current amount
    let quotaTotal = getInnerText("quota-total");
    
    // get input value + get current value
    let newQuotaTotal = parseFloat(quotaDonationValue) + parseFloat(quotaTotal);

    // update the balance
    document.getElementById("quota-total").innerText = newQuotaTotal;

    // total balance decrease
    let totalBalance = getInnerText("total-balance");
    
    let newTotalBalance = parseFloat(totalBalance) - parseFloat(quotaDonationValue);

    // update total balance
    document.getElementById("total-balance").innerText = newTotalBalance;

    // showing donation history
    let quotaTitle = document.getElementById("quota-title").innerText;

    showHistory(history, quotaDonationValue, quotaTitle);
});
