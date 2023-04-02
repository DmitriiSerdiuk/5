// Задание №2
function calculate(totalSum, itemsCount, promoCode = null) {
    let finalSum = totalSum;
    if (promoCode === 'ДАРИМ300') {
        finalSum = Math.max(finalSum - 300, 0);
    }

    if (itemsCount >= 10) {
        finalSum *= 0.95;
    }

    if (totalSum > 50000) {
        const discount = (totalSum - 50000) * 0.2;
        finalSum -= discount;
    }

    if (promoCode === 'СКИДКА15' && totalSum >= 20000) {
        finalSum *= 0.85;
    }

    return finalSum;
}

export default calculate;