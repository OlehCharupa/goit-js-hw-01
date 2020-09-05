// =================================================================================
// ======= task-05 ==================================================================
// =================================================================================
let userAnswer = prompt("Введите страну");
let userСountry = (userAnswer + "").toLowerCase();

const china = "китай";
const chili = "чили";
const australia = "австралия";
const india = "индия";
const jamaica = "ямайка";

switch (userСountry) {
  case china:
    console.log(
      `Доставка в ${
        china[0].toUpperCase() + china.substr(1)
      } будет стоить 100 кредитов.`
    );
    break;

  case chili:
    console.log(
      `Доставка в ${
        chili[0].toUpperCase() + chili.substr(1)
      } будет стоить 250 кредитов.`
    );
    break;

  case australia:
    console.log(
      `Доставка в ${
        australia[0].toUpperCase() + australia.substr(1)
      } будет стоить 170 кредитов.`
    );
    break;

  case india:
    console.log(
      `Доставка в ${
        india[0].toUpperCase() + india.substr(1)
      } будет стоить 80 кредитов.`
    );
    break;

  case jamaica:
    console.log(
      `Доставка в ${
        jamaica[0].toUpperCase() + jamaica.substr(1)
      } будет стоить 120 кредитов.`
    );
    break;

  default:
    alert("В вашей стране доставка не доступна!");
    break;
}
