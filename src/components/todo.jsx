import React, { useState } from 'react';
import { addTodo, remove } from '../reducers/todo';
import {useDispatch, useSelector} from 'react-redux';
const Todo = () => {
    const dispatch = useDispatch();
    const [input, setInput] = useState();
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(addTodo(input))
        setInput('')
    }
        



    return (
        <form action="" className='mx-auto'onSubmit={submitHandler}>
            <input type="text" 
                className='p-4 mx-auto hover:outline-none outline-none w-[600px] h-10 rounded-3xl bg-slate-400 text-white font-serif font-semibold'
                value={input}
                onChange={(e) => { setInput(e.target.value) }}
            />
            <button className='bg-slate-500 rounded-xl h-9 w-20 text-white '  type='submit'>addTodo</button>
        </form>



    );
}

export default Todo;
 