const range = (timeFrom, timeTo) => Array.from({length: (timeTo - timeFrom)}, (v, k) => k + timeFrom)

export default range;