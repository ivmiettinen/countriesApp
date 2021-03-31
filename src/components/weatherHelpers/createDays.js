export const createTomorrow = (e) => {
    const today = new Date()

    const tomorrow = new Date(today)

    tomorrow.setDate(tomorrow.getDate() + 1)

    const TomorrowDateString =
        tomorrow.getFullYear() +
        '-' +
        ('0' + (tomorrow.getMonth() + 1)).slice(-2) +
        '-' +
        ('0' + tomorrow.getDate()).slice(-2)

    // console.log('Tomorrow', TomorrowDateString)

    return TomorrowDateString
}

export const createToday = () => {
    const newString = []

    const nextDay = new Date()

    const nextday = nextDay.getDate()

    const nextmonth = nextDay.getMonth() + 1

    const nextyear = nextDay.getFullYear()

    newString.push(`${nextyear}-0${nextmonth}-${nextday}`)

    return newString.toString()
}
