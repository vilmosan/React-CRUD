import React, { Component } from 'react';
import { connect } from 'react-redux';

class BirthdayElement extends Component {
  render() {
  return (
    <div>
        <li className="list-item">
            <p>{this.props.birthday.birthday}</p>
            <div>
                <button 
                    className="btn-delete task-btn" 
                    onClick={()=>this.props.dispatch({type:'EDIT_BIRTHDAY',id:this.props.birthday.id})}
                >
                        <i className="fas fa-pen" id="editIcon"></i>
                </button>{' '}
                <button 
                    className="btn-edit task-btn" 
                    onClick={()=>this.props.dispatch({type:'DELETE_BIRTHDAY',id:this.props.birthday.id})}
                >
                        <i className="fas fa-trash-alt" id="deleteIcon"></i>
                </button>
            </div>
            
        </li>
    </div>
  );
 }
}
export default connect()(BirthdayElement);