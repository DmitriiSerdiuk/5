// Задание №2
function calculate(basketAmount, numbGoods, promotion = null) {
    if (promotion === 'ДАРИМ300' && basketAmount < 300) {
        console.log("Стоимость = 0");
    } else if (promotion === 'ДАРИМ300') {
        let totalAmount = basketAmount - 300;
        console.log("Стоимость = " + totalAmount);
    } else if (numbGoods >= 10) {
        totalAmount = basketAmount / 100 * 5;
        console.log("Стоимость = " + totalAmount);
    } else if (basketAmount >= 50000) {
        let basketDifference = basketAmount - 50000;
        totalAmount = 50000 + (basketDifference - (basketDifference / 100 * 20));
        console.log("Стоимость = " + totalAmount);
    } else if (promotion === 'СКИДКА15' && basketAmount >= 20000) {
        totalAmount = basketAmount / 100 * 15;
        console.log("Стоимость = " + totalAmount);
    }
}
export default { calculate }