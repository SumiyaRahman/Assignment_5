console.log("hello");

let noaTotal = document.getElementById("noa-total");

// redirect to FAQ page
function toFAQpage() {
    window.location.href = "FAQ.html";
}

// donation button
function toIndexHtml() {
    window.location.href = "index.html";
}
// history button
document.getElementById("show-history").addEventListener('click', function(){
    document.getElementById("block-history").classList.remove('hidden');

    document.getElementById("remove-donation-section").classList.add('hidden');
});