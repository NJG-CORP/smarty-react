const formatTime = (hour = null, minute = null, seconds = null) => {
    const times = [];

    if(hour !== null) {
        times.push(hour.toString().padStart(2, '0'))
    }

    if(minute !== null) {
        times.push(minute.toString().padStart(2, '0'))
    }

    if(seconds !== null) {
        times.push(seconds.toString().padStart(2, '0'))
    }


    return times.join(':')
}

export default formatTime