const str = "abc";
let reversed = "";
for (let i = str.length - 1; i >= 0; i--) {
  console.log(str[i]);
  reversed += str[i];
}
console.log(reversed);
