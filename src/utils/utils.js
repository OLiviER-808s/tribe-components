export const reorderElementInArray = (array, oldIndex, newIndex) => {
    if (oldIndex < 0 || oldIndex >= array.length || newIndex < 0 || newIndex >= array.length) {
        throw new Error("Invalid indices");
    }

    const [element] = array.splice(oldIndex, 1)
    array.splice(newIndex, 0, element)

    return array
}

export const countDecimals = (value) => {
    if (Math.floor(value) !== value) return value.toString().split('.')[1]?.length || 0

    return 0
}

// Convert accept string into matchable rules
export const isAcceptedFile = (rules, files) => {
    if (!rules) return true

    const acceptedTypes = rules.split(',').map(type => type.trim().toLowerCase())

    return acceptedTypes.some(accept => {
        if (accept.startsWith('.')) {
            return file.name.toLowerCase().endsWith(accept)
        }
        if (accept.endsWith('/*')) {
            const baseType = accept.split('/')[0]
            return file.type.startsWith(baseType + '/')
        }

        return file.type === accept
    })
}