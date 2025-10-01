console.log(validateUser("guest", "matrimony"));
function validateUser(uname, password) {
  if (uname === "guest" && password === "matrimony") return "Valid user";
  else return "Invalid user name or Password";
}

console.log(validateUser("guest", "1234"));
