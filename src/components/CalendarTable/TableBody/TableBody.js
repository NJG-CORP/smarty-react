import React, {Component} from 'react'
import Task from "../Task/Task";
import range from "../../../utils/array";
import formatTime from "../../../utils/time";
import TaskProvider from "../Task/taskProvider";

type Props = {
    tasks: Array,
    days: Array,
    timeFrom: number,
    timeTo: number
}

type State = {
    currentTime: Date
}

class TableBody extends Component<Props, State> {
    constructor() {
        super();
        this.state = {
            currentTime : new Date()
        }
    }

    componentDidMount() {
        setInterval( () => {
            this.setState({currentTime: new Date()})
        },1000)
    }

    render()
    {
        let timeRange = range(this.props.timeFrom, this.props.timeTo)
        const taskProvider = new TaskProvider(this.props.tasks)
        let currentDay = this.state.currentTime.getDay() === 0 ? 7 : this.state.currentTime.getDay()
        let currentHour = this.state.currentTime.getHours()

        return (
            <tbody>
            {
                timeRange.map(time => {
                    return (
                        <tr>
                            <td>{formatTime(time, 0)}</td>
                            {
                                this.props.days.map(day => {
                                    let task = taskProvider.findTask(time, day.id)

                                    return <Task description={task !== null ? task.description : ''}
                                                 highlighted={(day.id === currentDay && time === currentHour)}/>
                                })
                            }
                        </tr>
                    )
                })
            }
            </tbody>
        )
    }
}

export default TableBody