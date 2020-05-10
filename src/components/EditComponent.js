import React, { Component } from 'react';
import { connect } from 'react-redux';


class EditComponent extends Component {
    handleEdit = (e) => {
        e.preventDefault();
        const newBirthday = this.getBirthday.value;
        const data = {
            newBirthday
        }
        this.props.dispatch({ type: 'UPDATE', id: this.props.birthday.id, data: data })
    }
    render() {
        return (
        <div>
            <form onSubmit={this.handleEdit}>
                <input 
                    className="task-input-update" 
                    required type="text" 
                    ref={(input) => this.getBirthday = input}
                    defaultValue={this.props.birthday.birthday} 
                    placeholder="Enter new birthday..." />
                <button type="submit" className="btn add-task-btn">Update</button>
            </form>
        </div>
        );
    }
}
export default connect()(EditComponent);