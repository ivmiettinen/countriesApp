const today = new Date()

export const createToday = (e) => {
    const TodayDateString =
        today.getFullYear() +
        '-' +
        ('0' + (today.getMonth() + 1)).slice(-2) +
        '-' +
        ('0' + today.getDate()).slice(-2)

    return TodayDateString
}

export const createTomorrow = (e) => {
    const tomorrow = new Date(today)

    tomorrow.setDate(tomorrow.getDate() + 1)

    const TomorrowDateString =
        tomorrow.getFullYear() +
        '-' +
        ('0' + (tomorrow.getMonth() + 1)).slice(-2) +
        '-' +
        ('0' + tomorrow.getDate()).slice(-2)

    //
    dayName()

    return TomorrowDateString
}

export const dayName = () => {
    const days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
    ]

    const dayName = days[today.getDay()]

    return dayName
}

export const tomorrowDayName = () => {
    const days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
    ]

    const dayName = days[today.getDay() + 1]

    return dayName
}
