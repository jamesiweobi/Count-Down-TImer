const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

let futureDate = new Date(2021, 10, 06, 00, 00);
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
giveaway.textContent = `Give away ends on ${year}, ${
  months[futureDate.getMonth()]
} ${weekdays[futureDate.getDay()]} ${futureDate.getDay()}, 00:00am`;
