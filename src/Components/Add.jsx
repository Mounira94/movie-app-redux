import React, { Component } from 'react';
class Add extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div style={{display:this.props.show ? "block" : "none"}} className="form-add" >
            <div className="form">
                <input id="name" value={this.props.name} className="form-input" onChange={this.props.hundleChange} type="text" placeholder="Movie name" />
                <input id="rating" value={this.props.rating} className="form-input" onChange={this.props.hundleChange} type="text" placeholder="Movie rating" />
                    <button className="btn" onClick={ this.props.editOrSave=='edit'?this.props.edit: this.props.addMovie}>{this.props.editOrSave}</button>
            </div>
            </div>
        )
    }
}
export default Add;