function testScope() {
  if (true) {
    var x = 10; // var is function-scoped
    let y = 20; // let is block-scoped
    const z = 30; // const is block-scoped

    console.log("Inside block:", x, y, z); //10,20,30
  }

  console.log("Outside block:", x);
  // ✅ Works → var is visible (10)

  //console.log(y); // ❌ Error: y is not defined
 // console.log(z); // ❌ Error: z is not defined
}

testScope();

const user = { name: "Alice", age: 25 };

user.age = 26; // ✅ Allowed (object mutation)
console.log(user); // { name: "Alice", age: 26 }
console.log(user.age);
console.log(user.name);

// user = { name: "Bob" };
//  Error: Assignment to constant variable
