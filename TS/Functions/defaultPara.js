function userDetails(msg, name) {
    if (name === void 0) { name = "guest"; }
    console.log(msg, name);
}
userDetails("welcome");
userDetails("Welcome", "Praveen");
