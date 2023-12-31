let weatherUpdateTime = document.querySelector(".weather-update-time");
let weatherDate = document.querySelector(".date-info .weather-date");
export const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
export const daysOfWeekAbbreviations = [
  "Sun",
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat",
];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
export const monthAbbreviations = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
export let currentDate = new Date();
// for hourly
export const currentDay = currentDate.getDate();

export default function handleData(){
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    
    const formattedTime = `${hours % 12 || 12}:${
      minutes < 10 ? "0" : ""
    }${minutes} ${hours >= 12 ? "PM" : "AM"}`;
    let nowDate = `${daysOfWeek[currentDate.getDay()]} , ${
      monthAbbreviations[currentDate.getMonth()]
    } ${currentDate.getDate()}`;
    weatherDate.textContent = nowDate;
    weatherUpdateTime.textContent = `Update As Of ${formattedTime}`;
}
handleData();

