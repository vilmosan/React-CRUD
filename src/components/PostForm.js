import React, { Component } from 'react';
import {connect} from 'react-redux';

class PostForm extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const title = this.getTitle.value;
        const data = {
          id: new Date(),
          title,
          editing: false
        }
        //console.log(data);
        // dispatch method accepts an object as it’s argument and this object is what we call as ‘action’.
        this.props.dispatch({
            type:'ADD_POST',
            data});
        this.getTitle.value = '';
      }
    render() {
        return (
        <div>
            <form onSubmit={this.handleSubmit}>
                <input required type="text" ref={(input)=>this.getTitle = input} placeholder="Enter description here..." className="task-input"/>
                <button className="btn add-task-btn">Add</button>
            </form>
        </div>
        );
    }
}
export default connect()(PostForm); // connect() gives you access to dispatch as a prop