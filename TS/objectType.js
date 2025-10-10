var accountHolderInfo = {
    accountNo: 1002,
    accHolderName: "sudha",
    typeofAcc: "elite",
    IsActive: true,
};
var customerDetails = [
    {
        accountNo: 1002,
        accHolderName: "sudha",
        typeofAcc: "elite",
        IsActive: true,
    },
    {
        accountNo: 1003,
        accHolderName: "Yashwanth",
        typeofAcc: "SB",
        IsActive: true,
    },
];
var accountHolderName = "sudha";
var customerData = {
    accountNo: 1003,
    accHolderName: "Yashwanth",
    typeofAcc: "SB",
    IsActive: true,
    address: { state: "TamilNade", city: "Chennai" }, //nested object
};
console.log(customerData);
var customer1 = {
    accountNo: 1003,
    accHolderName: "Yashwanth",
    typeofAcc: "SB",
    IsActive: true,
    balance: 90000,
};
var customer2 = {
    accountNo: 1004,
    accHolderName: "Sudha",
    typeofAcc: "Elite",
    IsActive: true,
    address: "chennai",
};
console.log(customer1);
console.log(customer2);
var customer3 = {
    accountNo: 1004,
    accHolderName: "Sudha",
    typeofAcc: "Elite",
    IsActive: true,
    //address: "chennai", //restricted
};
var customer4 = {
    accountNo: 1004,
    accHolderName: "Sudha",
    typeofAcc: "Elite",
    IsActive: true,
    //address: "chennai", //restricted
};
console.log(customer4);
