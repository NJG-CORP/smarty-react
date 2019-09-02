type Time = {
    hour: number,
    day: number,

}
type Task = {
    time: Time,
    description: String,
    duration?: number
}

export default Task