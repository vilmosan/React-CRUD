import React, { Component } from 'react';
import { connect } from 'react-redux';

class Post extends Component {
  render() {
  return (
    <div>
        <li className="list-item">
            <p>{this.props.post.title}</p>
            <div>
                <button 
                    className="btn-delete task-btn" 
                    onClick={()=>this.props.dispatch({type:'EDIT_POST',id:this.props.post.id})}
                >
                        <i className="fas fa-pen" id="editIcon"></i>
                </button>{' '}
                <button 
                    className="btn-edit task-btn" 
                    onClick={()=>this.props.dispatch({type:'DELETE_POST',id:this.props.post.id})}
                >
                        <i className="fas fa-trash-alt" id="deleteIcon"></i>
                </button>
            </div>
            
        </li>
    </div>
  );
 }
}
export default connect()(Post);