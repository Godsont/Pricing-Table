const plansSwitch = document.querySelector(".plans-switch");
const basicPrice = document.querySelector(".basic-price");
const professionalPrice = document.querySelector(".professional-price");
const businessPrice = document.querySelector(".business-price");
const planDuration = document.querySelectorAll(".plan-duration");

plansSwitch.addEventListener("change", () => {
    if (plansSwitch.checked) {
        basicPrice.innerText = "$349";
        professionalPrice.innerText = "$499";
        businessPrice.innerText = "$799";
        planDuration.forEach(p => {
            p.innerText = "/ year";
        })
    } else {
        basicPrice.innerText = "$49";
        professionalPrice.innerText = "$99";
        businessPrice.innerText = "$149";
        planDuration.forEach(p => {
            p.innerText = "/ month";
        })
    }
})