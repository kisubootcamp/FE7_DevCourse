function a() {
  function greet() {
    console.log("greet");
  }
  console.log(greet);
  return greet;
}
const greet = a();
greet();
