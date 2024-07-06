import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TodoItem from './TodoItem';
import api from '../../api/index';
import { addTodo, setTodos } from '../../store/slices/todoSlice';


const Todo = () => {
    const [task, setTask] = useState('');
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    useEffect(() => {
        api.getItems().then((response) => {
            dispatch(setTodos(response.data));
        });
    }, [dispatch]);

    const AddTodo = () => {
        const newTodo = {
            id: todos.length + 1,
            title: task,
            completed: false,
        };
        api.postItem(newTodo).then(() => {
            dispatch(addTodo(newTodo));
        });
        setTask('');
    };

    return (
        <div className="container">
            <h1>To Do App</h1>
            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Add new task"
            />
            <button onClick={AddTodo}>Add</button>
            <ul>
                {todos.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} />
                ))}
            </ul>
        </div>
    );
};

export default Todo;
