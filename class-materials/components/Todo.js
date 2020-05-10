import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({onClick, completed, text}) => (

        <li
            style={{
                textDecoration: completed ? 'line-through' : 'none'
            }}
            className="list-group-item"
        >
            <div className="row">
                <div className="col-8">
                    <h3>{text}</h3>
                </div>
                <div className="col-4 text-right">
                    <button className="btn btn-success" onClick={onClick}>Check</button>
                </div>
            </div>

        </li>

);

// not mandatory element of the application
Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
};

export default Todo
