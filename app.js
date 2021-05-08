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

// future time in ms

const futureTime = futureDate.getTime();

const getRemainingTime = () => {
  const today = new Date().getTime();
  const t = futureTime - today;

  // 1s = 1000ms
  // 1m = 60s
  // 1hr = 60mins
  // 1d = 24hrs

  // Values in ms
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  const day = Math.floor(t / oneDay);
  const hour = Math.floor((t % oneDay) / oneHour);
  const minute = Math.floor((t % oneHour) / oneMinute);
  const sec = Math.floor((t % oneMinute) / 1000);

  const values = [day, hour, minute, sec];
  const format = (item) => {
    if (item < 10) return `0${item}`;
    return item;
  };
  items.forEach((item, index) => {
    item.innerHTML = format(values[index]);
  });
  if (t < 0) {
    clearInterval(countDown);
    updateCount();
  }
};
let countDown = setInterval(getRemainingTime, 1000);
getRemainingTime();

// Update count to the next year
const updateCount = () => {
  const nextYearBirthday = new Date().getTime();
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  const day = Math.floor(nextYearBirthday / oneDay);
  const hour = Math.floor((nextYearBirthday % oneDay) / oneHour);
  const minute = Math.floor((nextYearBirthday % oneHour) / oneMinute);
  const sec = Math.floor((nextYearBirthday % oneMinute) / 1000);

  const values = [day, hour, minute, sec];
  items.forEach((item, index) => {
    item.innerHTML = format(values[index]);
  });
};
