function displayUserDetail(fName: string, lName?: string) {
  if (lName) console.log("User name :", fName + lName);
  else console.log("User name :", fName);
}
displayUserDetail("praveen");
displayUserDetail("praveen","kumar")