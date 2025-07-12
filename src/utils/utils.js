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