let history = document.getElementById("block-history");
let modal = document.getElementById("show-modal");
const noaDonationValue = document.getElementById('donation-value');
const fenDonationValue = document.getElementById('feni-donation-value');
const quoDonationValue = document.getElementById('quota-donation-value');
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
    const donationValue = getInputValue("donation-value");
    if(donationValue === -1){
        alert("Invalid Input");
        noaDonationValue.value = '';
        return;
    }

    const totalBalance = getInnerText("total-balance");
    const donVal = donationValue;
    const totVal = totalBalance;

    // input validation
     if (!validateDonation(donVal, totVal)) {
        noaDonationValue.value = '';
        alert("Insufficient Coins!!");
        return;
    }

    // get current amount
    let noaTotal = getInnerText("noa-total");
    
    // get input value + get current value
    let newNoaTotal = parseFloat(donVal) + parseFloat(noaTotal);;

    // update the balance
    document.getElementById("noa-total").innerText = newNoaTotal.toFixed(2);
    
    let newTotalBalance = parseFloat(totVal) - parseFloat(donVal);

    // update total balance
    document.getElementById("total-balance").innerText = newTotalBalance.toFixed(2);

    // showing donation history
    let noaTitle = document.getElementById("noa-title").innerText;

    showHistory(history, donationValue, noaTitle);
    noaDonationValue.value = '';

    // show modal
    modal.showModal();
});
document.getElementById('quota-donate-btn').addEventListener('click', function(event){
    event.preventDefault();

    // get input value
    const donationValue = getInputValue("quota-donation-value");
    if(donationValue === -1){
        alert("Invalid Input");
        quoDonationValue.value = '';
        return;
    }

    const totalBalance = getInnerText("total-balance");
    const donVal = donationValue;
    const totVal = totalBalance;

    // input validation
     if (!validateDonation(donVal, totVal)) {
        quoDonationValue.value = '';
        alert("Insufficient Coins!!");
        return;
    }

    // get current amount
    let noaTotal = getInnerText("quota-total");
    
    // get input value + get current value
    let newNoaTotal = parseFloat(donVal) + parseFloat(noaTotal);;

    // update the balance
    document.getElementById("quota-total").innerText = newNoaTotal.toFixed(2);
    
    let newTotalBalance = parseFloat(totVal) - parseFloat(donVal);

    // update total balance
    document.getElementById("total-balance").innerText = newTotalBalance.toFixed(2);

    // showing donation history
    let noaTitle = document.getElementById("quota-title").innerText;

    showHistory(history, donationValue, noaTitle);
    quoDonationValue.value = '';

    // show modal
    modal.showModal();
});
document.getElementById('feni-donate-btn').addEventListener('click', function(event){
    event.preventDefault();

    // get input value
    const donationValue = getInputValue("feni-donation-value");
    if(donationValue === -1){
        alert("Invalid Input");
        fenDonationValue.value = '';
        return;
    }

    const totalBalance = getInnerText("total-balance");
    const donVal = donationValue;
    const totVal = totalBalance;

    // input validation
     if (!validateDonation(donVal, totVal)) {
        fenDonationValue.value = '';
        alert("Insufficient Coins!!");
        return;
    }

    // get current amount
    let noaTotal = getInnerText("feni-total");
    
    // get input value + get current value
    let newNoaTotal = parseFloat(donVal) + parseFloat(noaTotal);;

    // update the balance
    document.getElementById("feni-total").innerText = newNoaTotal.toFixed(2);
    
    let newTotalBalance = parseFloat(totVal) - parseFloat(donVal);

    // update total balance
    document.getElementById("total-balance").innerText = newTotalBalance.toFixed(2);

    // showing donation history
    let noaTitle = document.getElementById("feni-title").innerText;

    showHistory(history, donationValue, noaTitle);
    fenDonationValue.value = '';

    // show modal
    modal.showModal();
});