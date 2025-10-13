//unknown
let accountNo: any = 8887687;
console.log(typeof accountNo);
accountNo = "jhfkhskjhkfs";
let cifno: number = accountNo;
console.log(typeof accountNo);
console.log("unknown type output below");
//unknown type
let isActive: unknown = true;

//let status: number = isActive  //unknown datatype to a number type
console.log(typeof isActive);

//type check
if (typeof isActive == "boolean") {
  isActive = "yes";
}

console.log(typeof isActive);
console.log(typeof accountNo);