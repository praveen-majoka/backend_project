import React from 'react';
import { useSelector } from 'react-redux';
import todo from '../reducers/todo';

const TodoList = () => {
    const todos = useSelector(state => state.todos)
    console.log(todos)

    return (
        <div className='text-white'>


            <ul>





                {
                    todos.map(
                        (todo) => {
                            <li>{todo.text}{console.log(todo.text)} </li>

                        }
                    )
                }
            </ul>
        </div>
    );
}

export default TodoList;
