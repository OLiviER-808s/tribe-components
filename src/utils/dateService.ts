export const formatDate = (timestamp: number | Date): string => {
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

export const formatTimestamp24Hour = (timestamp: number | Date): string => {
    const userLocale = navigator.language || 'en-US'
    const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone

    const formatter = new Intl.DateTimeFormat(userLocale, {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
        timeZone: userTimeZone,
    })

    return formatter.format(timestamp)
}

export const formatDateWithTime = (timestamp: number | Date): string => {
    return `${formatDate(timestamp)} ${formatTimestamp24Hour(timestamp)}`
}

export const formatDateRange = (timestamps: [number | Date, number | Date]): string => {
    return `${formatDate(timestamps[0])} - ${formatDate(timestamps[1])}`
}
