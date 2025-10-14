function displayFullName(firstname) {
    //0 or more values
    var otherNames = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        otherNames[_i - 1] = arguments[_i];
    }
    console.log(firstname + otherNames.join(" "));
}
displayFullName("sudha", "valli", "chennai");
displayFullName("sudha", "valli");
displayFullName("sudha");
displayFullName("sudha", "valli", "sarathy", "chennai");
function calculateTotalPrice() {
    var charges = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        charges[_i] = arguments[_i];
    }
    //logic
    //return total amount to be paid
}
calculateTotalPrice(20, 30, 40);
calculateTotalPrice(30, 90, 80, 90);
