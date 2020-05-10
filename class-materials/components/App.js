import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
    <div>
        <div className="container-fluid">
            <div className="row">
                <div className="col text-center">
                    <h1>My Todo App</h1>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <AddTodo/>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <hr/>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <VisibleTodoList/>
                </div>
            </div>
            <div className="row">
                <div className="col">
                </div>
            </div>
        </div>
        <Footer/>
    </div>
);

export default App
