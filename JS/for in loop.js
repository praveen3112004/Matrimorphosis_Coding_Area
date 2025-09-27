let defualtTheme = {
  backgroundColor: "light",
  fontFace: "Arial",
  fontSize: 15,
};
let userPreference = {
  backgroundColor: "dark",
  fontSize: 18,
};
console.log("before user preference, the default theme value is", defualtTheme);

for (let key in userPreference) {
  defualtTheme[key] = userPreference[key];
}

console.group("---------------------------------");

console.log("after user preference is set, the default theme value is",defualtTheme);
