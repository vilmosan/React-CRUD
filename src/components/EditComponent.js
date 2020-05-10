import React, { Component } from 'react';
import { connect } from 'react-redux';


class EditComponent extends Component {
handleEdit = (e) => {
  e.preventDefault();
  const newTitle = this.getTitle.value;
  const data = {
    newTitle
  }
  this.props.dispatch({ type: 'UPDATE', id: this.props.post.id, data: data })
}
render() {
return (
<div>
  <form onSubmit={this.handleEdit}>
    <input className="task-input-update" required type="text" ref={(input) => this.getTitle = input}
    defaultValue={this.props.post.title} placeholder="Enter Post Title" />
    <button type="submit" className="btn add-task-btn">Update</button>
  </form>
</div>
);
}
}
export default connect()(EditComponent);