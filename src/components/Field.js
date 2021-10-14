import React, { Component } from 'react';
import '../css/Field.css';

class Field extends Component {
    constructor(props) {
        super(props);
        this.state = {
            disabled: this.props.disabled,
        }
    }

    render() {
        return (
            <textarea className="field" disabled={!this.state.disabled()}></textarea>
        );
    }
}

export default Field;