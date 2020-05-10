import React, { Component } from 'react';
import { connect } from 'react-redux';

class BirthdayForm extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const name = this.getName.value;
        const date = this.getDate.value;
        const birthday = date + ': ' + name;
        const data = {
          id: new Date(),
          birthday,
          editing: false
        }
        //console.log(data);
        // dispatch method accepts an object as it’s argument and this object is what we call as ‘action’.
        this.props.dispatch({
            type:'ADD_BIRTHDAY',
            data});
        this.getDate.value = '';
        this.getName.value = '';
      }
    render() {
        return (
        <div>
            <form onSubmit={this.handleSubmit}>
                <input required type="text" ref={(input)=>this.getName = input} placeholder="Enter name here..." className="task-input"/>
                <input required type="date" ref={(input)=>this.getDate = input} className="task-input" onfocus="(this.type='date')" onblur="(this.type='text')"/>
                
                <button className="btn add-task-btn">Add</button>
            </form>
        </div>
        );
    }
}
export default connect()(BirthdayForm); // connect() gives you access to dispatch as a prop