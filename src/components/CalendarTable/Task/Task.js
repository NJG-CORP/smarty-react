import React, { Component } from 'react';

type Props = {
    description: String,
    highlighted: boolean
};

export default class Task extends Component<Props> {
    props:Props;

    render() {
        return (
            <td className={this.props.highlighted ? 'active-task' : ''}>{this.props.description}</td>
        )
    }
}