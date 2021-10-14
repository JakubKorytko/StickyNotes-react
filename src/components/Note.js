import React, { Component } from 'react';
import Field from './Field';
import Draggable from 'react-draggable';
import '../css/Note.css'

class Note extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false,
            buttonVisible: false
        }
    }

    disabled = () => {
        return this.state.editing
    }

    changeState = () => {
        this.setState({editing: !this.state.editing})
    }

    text = () => {
        if (this.state.editing) {
            return "Save"
        } else {
            return "Edit"
        }
    }

    visibility = () => {
        if (this.state.buttonVisible || this.state.editing) {
            return "visible"
        } else {
            return "hidden"
        }
    }

    changeVis = (x) => {
        this.setState({buttonVisible: x})
    }

    render() {
        return (
            <Draggable handle=".handle" bounds="parent">
                <div className="note" onMouseOver={() => {this.changeVis(true)}} onMouseOut={() => {this.changeVis(false)}}>
                    <div className="handle">Drag here</div>
                    <Field disabled={this.disabled}/>
                    <div className="buttonDiv">
                        <button className="butt" style={{visibility: this.visibility()}} onClick={this.changeState}>{this.text()}</button>
                    </div>
                </div>
            </Draggable>
        );
    }
}

export default Note;