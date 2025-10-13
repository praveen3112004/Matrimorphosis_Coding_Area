let accountNumber: number = 8900876;
console.log(accountNumber);

let accountHolderName: string = "praveen";
console.log(accountHolderName);
//typescript superset of js
//js is the subset of ts
//whatever you write using js it is acceptable in ts also   //not vice-versa
let isAccountActive: boolean = true;
// const transactionID: bigint = 123456789012345678901234567890n;
console.log(isAccountActive);
let balance = 20000;
function makeTransaction(amount: number): number | string {
  if (balance < amount) {
    return "Insufficient balance";
  } else balance = balance - amount;
  return balance;
}

console.log(makeTransaction(21000));
