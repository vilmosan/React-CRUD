import React from 'react'
import {connect} from 'react-redux'
import {addTodo} from '../actions'

const AddTodo = ({dispatch}) => {

    // we will store the input field itself here.
    let input;

    return (
        <div>
            <form onSubmit={e => {
                // no reload at all
                e.preventDefault();

                // check
                if (!input.value.trim()) {
                    return
                }

                dispatch(addTodo(input.value));

                input.value = ''
            }}>
                <div className="form-group row">
                    <label htmlFor="todo" className="col-sm-4 col-form-label text-right ">My Todo's name</label>
                    <div className="col-4">
                        <input name="todo" id="todo" className="form-control" ref={node => input = node}/>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col text-center">
                        <button type="submit" className="btn btn-primary">
                            Add Todo
                        </button>
                    </div>
                </div>

            </form>
        </div>
    )
};

export default connect()(AddTodo)
