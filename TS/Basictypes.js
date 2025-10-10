var accountNumber = 8900876;
console.log(accountNumber);
var accountHolderName = "praveen";
console.log(accountHolderName);
//typescript superset of js
//js is the subset of ts
//whatever you write using js it is acceptable in ts also   //not vice-versa
var isAccountActive = true;
// const transactionID: bigint = 123456789012345678901234567890n;
console.log(isAccountActive);
var balance = 20000;
function makeTransaction(amount) {
    if (balance < amount) {
        return "Insufficient balance";
    }
    else
        balance = balance - amount;
    return balance;
}
console.log(makeTransaction(21000));
