let input = confirm("Хотите ввсести число?");
let total = 0;

while (input) {
  input = +prompt("Введитие, пожалуйста число. ");
  total += input;
  console.log(input);
}
// console.log(total);
alert(`Общая сумма чисел равна ${total}`);
