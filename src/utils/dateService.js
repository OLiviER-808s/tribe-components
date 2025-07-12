export const formatDate = (timestamp) => {
    const userLocale = navigator.language || 'en-US'
    const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone

    const formatter = new Intl.DateTimeFormat(userLocale, {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        timeZone: userTimeZone,
    })

    return formatter.format(timestamp)
}

export const formatDateWithTime = (timestamp) => {
    return `${formatDate(timestamp)} ${formatTimestamp24Hour(timestamp)}`
}

export const formatDateRange = (timestamps) => {
    return `${formatDate(timestamps[0])} - ${formatDate(timestamps[1])}`
}