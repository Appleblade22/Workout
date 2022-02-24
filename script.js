var now = new Date();
var start = new Date(now.getFullYear(), 0, 0);
var diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
var oneDay = 1000 * 60 * 60 * 24;
var day = Math.floor(diff / oneDay);
console.log('Day of year: ' + day);
console.log(day%4);
let workout_day = ["pull","leg","rest","push"];
let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
document.getElementById(workout_day[day%4]).style.display = "flex";
document.getElementById("DAY").innerHTML = days[now.getDay()];
document.getElementById("worko").innerHTML = workout_day[day%4].toUpperCase() + " DAY";

