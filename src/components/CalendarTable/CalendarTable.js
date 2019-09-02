import React from "react";
import {Table} from 'react-bootstrap'
import TableHead from "./TableHead/TableHead";
import TableBody from "./TableBody/TableBody";
import tasks from "../../data/tasks";

let
    days = [
        {
            "id": 1,
            "short_title": "ПН"
        },
        {
            "id": 2,
            "short_title": "ВТ"
        },
        {
            "id": 3,
            "short_title": "СР"
        },
        {
            "id": 4,
            "short_title": "ЧТ"
        },
        {
            "id": 5,
            "short_title": "ПТ"
        },
        {
            "id": 6,
            "short_title": "СБ"
        },
        {
            "id": 7,
            "short_title": "ВС"
        }
    ]


const CalendarTable = () => {
    return (
        <Table striped={true} bordered={true} className="calendar-table">
            <TableHead days={days}/>
            <TableBody timeFrom={8} timeTo={22} days={days} tasks={tasks}/>
        </Table>
    )
}

export default CalendarTable