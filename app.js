const year_born = 2023;
const month_born = 2;
const month_day = 10;

function getAge(birthYear, month_born, month_day) {
  let now = new Date();
  let currentYear = now.getFullYear();
  let currentMonth = now.getMonth() + 1;
  let currentDay = now.getDate();
  console.log(now);
  console.log(now.getDate());
  age = currentYear - birthYear;
  month = currentMonth - month_born;
  day = currentDay - month_day;
  return [age, month, day];
}

getAge(year_born, month_born, month_day);
document.getElementById("yearsold").innerHTML =
  age + " y " + month + " m " + day + "d";


if (month === 0 && day === 0) {
document.getElementById("emoji").innerHTML = "🎂";
console.log("happy birthday emma, we love you so much ❤️");
}