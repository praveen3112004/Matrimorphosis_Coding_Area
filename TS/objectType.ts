let accountHolderInfo: any = {
  accountNo: 1002,
  accHolderName: "sudha",
  typeofAcc: "elite",
  IsActive: true,
};

let customerDetails: any = [
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

let accountHolderName: any = "sudha";

let customerData: any = {
  accountNo: 1003,
  accHolderName: "Yashwanth",
  typeofAcc: "SB",
  IsActive: true,
  address: { state: "TamilNade", city: "Chennai" }, //nested object
};
console.log(customerData);
//Index signature
type customerType = { [key: string]: string | boolean | number };

let customer1: customerType = {
  accountNo: 1003,
  accHolderName: "Yashwanth",
  typeofAcc: "SB",
  IsActive: true,
  balance: 90000,
};
let customer2: customerType = {
  accountNo: 1004,
  accHolderName: "Sudha",
  typeofAcc: "Elite",
  IsActive: true,
  address: "chennai",
};

console.log(customer1);
console.log(customer2);

type customerDataType = {
  accountNo: number;
  accHolderName: string;
  typeofAcc: string;
  IsActive: boolean;
};

let customer3: customerDataType = {
  accountNo: 1004,
  accHolderName: "Sudha",
  typeofAcc: "Elite",
  IsActive: true,
  //address: "chennai", //restricted
};

interface ICustomerDataType {
  accountNo: number;
  accHolderName: string;
  typeofAcc: string;
  IsActive: boolean;
}

let customer4: ICustomerDataType = {
  accountNo: 1004,
  accHolderName: "Sudha",
  typeofAcc: "Elite",
  IsActive: true,
  //address: "chennai", //restricted
};
console.log(customer4);
