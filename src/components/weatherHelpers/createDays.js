export const createTomorrow = (e) => {
    console.log('eeee', e)
    const newString = []

    const nextDay = new Date()

    const nextday = nextDay.getDate() + 1

    const nextmonth = nextDay.getMonth() + 1

    const nextyear = nextDay.getFullYear()

    newString.push(`${nextyear}-0${nextmonth}-${nextday}`)

    console.log('newString', newString)

    return newString.toString()
}


export const createToday = () => {
    const newString = [];

    const nextDay = new Date();

    const nextday = nextDay.getDate();

    const nextmonth = nextDay.getMonth() + 1;

    const nextyear = nextDay.getFullYear();

    newString.push(`${nextyear}-0${nextmonth}-${nextday}`);

    return newString.toString();
  };
