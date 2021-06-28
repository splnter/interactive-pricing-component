const prices = [8.00, 12.00, 16.00, 24.00 , 36.00];
const pageviews = ['10K ', '50K ', '100K ', '500K ', '1M '];
let multiplyPriceBy = 1;

function respondToUpdate () {
    const totalPageviews = document.getElementById('total-pageviews');
    const price = document.getElementById('update-price');
    const rangeValue = document.querySelector('.slider').value;
    
    // update price and number of pageviews
    price.innerHTML = parseFloat(prices[rangeValue -1] * multiplyPriceBy).toFixed(2);
    totalPageviews.innerHTML = pageviews[rangeValue -1];
}

function updateColorOfSlider () {
    const slider = document.querySelector('.slider');
    const rangeValue = document.querySelector('.slider').value;
    const rangeInPercent = rangeValue / 5 * (100) -8;
    console.log(rangeInPercent);

    // change the color of the slider based on users input
    slider.style.background = `linear-gradient(90deg, hsl(174, 77%, 80%), ${rangeInPercent}%, hsl(224, 65%, 95%) ${rangeInPercent}%)`;

}

function applyDiscount () {
    const price = document.getElementById('update-price');
    const rangeValue = document.querySelector('.slider').value;
    const switchBtn = document.querySelector('.toggle').classList.toggle('full-year');

    // check if the toggle contains the class of full-year
    const switchBtnWithClass = document.querySelector('.toggle').classList.contains('full-year');
    console.log(switchBtnWithClass);

    // if the toggle contains full-year -> return 0.75, else 1
    multiplyPriceBy = switchBtnWithClass ? 0.75 : 1;
    price.innerHTML = parseFloat(prices[rangeValue -1] * multiplyPriceBy).toFixed(2);
    return multiplyPriceBy;
}

document.querySelector('.toggle').addEventListener('click', applyDiscount)
document.querySelector('.slider').addEventListener('input', respondToUpdate)
document.querySelector('.slider').addEventListener('input', updateColorOfSlider)