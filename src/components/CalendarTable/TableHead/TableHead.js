import React, {Component} from 'react'
import TableHeadCol from "./TableHeadCol";
import formatTime from "../../../utils/time";
type Props = {
    days: Array,
}

type State = {
    currentTime: Date
}

class TableHead extends Component<Props, State> {
    constructor()
    {
        super();
        this.state = {
            currentTime: new Date()
        }
    }

    componentDidMount()
    {
        setInterval(() => {
            this.setState({currentTime: new Date()})
        }, 1000)
    }

    render()
    {
        return (
            <thead className="thead-dark">
            <tr>
                <th style={{width: 50 + 'px'}}>{formatTime(this.state.currentTime.getHours(), this.state.currentTime.getMinutes(), this.state.currentTime.getSeconds())}</th>
                {this.props.days.map(day => {
                    return <TableHeadCol title={day.short_title}/>
                })}
            </tr>
            </thead>
        )
    }
}
export default TableHead