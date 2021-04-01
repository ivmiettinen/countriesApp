export const createToday = (e) => {
    const today = new Date()

    const TodayDateString =
        today.getFullYear() +
        '-' +
        ('0' + (today.getMonth() + 1)).slice(-2) +
        '-' +
        ('0' + today.getDate()).slice(-2)

    return TodayDateString
}

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

    return TomorrowDateString
}
