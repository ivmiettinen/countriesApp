const today = new Date();

export const createToday = (e) => {
  const TodayDateString =
    today.getFullYear() +
    '-' +
    ('0' + (today.getMonth() + 1)).slice(-2) +
    '-' +
    ('0' + today.getDate()).slice(-2);

  return TodayDateString;
};

export const createTomorrow = (e) => {
  const tomorrow = new Date(today);

  tomorrow.setDate(tomorrow.getDate() + 1);

  const createTomorrowString =
    tomorrow.getFullYear() +
    '-' +
    ('0' + (tomorrow.getMonth() + 1)).slice(-2) +
    '-' +
    ('0' + tomorrow.getDate()).slice(-2);

  return createTomorrowString;
};

export const createDayAfterTomorrow = () => {
  const tomorrow = new Date(today);

  tomorrow.setDate(tomorrow.getDate() + 2);

  const dayAfterTomorrowString =
    tomorrow.getFullYear() +
    '-' +
    ('0' + (tomorrow.getMonth() + 1)).slice(-2) +
    '-' +
    ('0' + tomorrow.getDate()).slice(-2);

  //

  return dayAfterTomorrowString;
};

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

export const dayName = () => {
  const dayName = days[today.getDay()];

  return dayName;
};

export const tomorrowDayName = () => {
  const dayName = days[today.getDay() + 1];

  if (today.getDay() + 1 === 7) {
    return 'Sunday';
  } else {
    return dayName;
  }
};
export const dayAfterTomorrowName = () => {
  const dayName = days[today.getDay() + 2];

  //   console.log('arraysta today.getDay()', today.getDay() + 1);

  //   console.log('dayName', dayName);

  if (today.getDay() + 2 === 7) {
    return 'Sunday';
  } else if (today.getDay() + 2 === 8) {
    return 'Monday';
  } else {
    return dayName;
  }
};
