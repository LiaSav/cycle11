let n = prompt(
  'Hi, friend! \nEnter a number N, greater than 0. \nThe function will check whether it is simple or composite. If the number is simple, it returns the string "Prime number". if not, it returns "Composite number".'
);
if (n) {
  alert("Result: " + cycle(n) + ".");
} else {
  alert("You didn`t enter number N");
}
function cycle(n) {
  let x = "Prime number";
  for (let i = 2, max = Math.sqrt(n); i <= max; i++) {
    if (n % i === 0) {
      x = "Composite number";
    }
  }
  return x;
}
