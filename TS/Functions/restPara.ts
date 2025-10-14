function displayFullName(firstname: string, ...otherNames: string[]) {
  //0 or more values

  console.log(firstname + otherNames.join(" "));
}
displayFullName("sudha", "valli", "chennai");
displayFullName("sudha", "valli");
displayFullName("sudha");
displayFullName("sudha", "valli", "sarathy", "chennai");

function calculateTotalPrice(...charges: number[]) {
  //logic
  //return total amount to be paid
}
calculateTotalPrice(20, 30, 40);
calculateTotalPrice(30, 90, 80, 90);
