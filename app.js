const year_born = 2023;
const month_born = 2;
const month_day = 10;

function getAge(birthYear, month_born, month_day) {
  let date1 = new Date(birthYear, month_born - 1, month_day);
  let date2 = new Date();
  let diff = new Date(date2.getTime() - date1.getTime());
  
  year = (diff.getUTCFullYear() - 1970); // Gives difference as year
  
  month = (diff.getUTCMonth()); // Gives month count of difference
  
  day = (diff.getUTCDate() - 1); // Gives day count of difference
  return [year, month, day];
}

getAge(year_born, month_born, month_day);
document.getElementById("yearsold").innerHTML =
  year + " y " + month + " m " + day + "d";


if (month === 0 && day === 0) {
document.getElementById("emoji").innerHTML = "🎂";
console.log("happy birthday emma emmchen, we love you so much ❤️");
}