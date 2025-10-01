let discountedValue = function (amount, discountPercentage) {
  return amount * (discountPercentage / 100);
};
console.log("Discounted amount =", discountedValue(2000, 10));