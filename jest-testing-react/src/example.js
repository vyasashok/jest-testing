import React, { Component } from 'react';
import ReactDom from 'react-dom';

export default class Test extends Component {
    constructor(props) {
        super(props);

        this.onClick = this.onClick.bind(this);

        this.state = {
            clientId: ""
        }
    }

    onClick(){
        this.setState({
            clientId: "123"
        })
    }

    render() {
        return (
            <div>
                <label>Ashokgh</label>
                <p>{this.props.name}</p>
                <button onClick={this.onClick}>click</button>
            </div>
        )
    }
}