import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';
import TotalCompleteItems from './components/TotalCompleteItems';
import { useSelector,useDispatch } from 'react-redux';
import {addUser} from "./redux/users";

const App = () => {
	const dispatch = useDispatch();
	const count = useSelector((state) => console.log(state.user))
const newUser =()=>{
		return dispatch(addUser('vio'))
}
	return (
		<div className='container bg-white p-4 mt-5'>
			<h1>My Todo List</h1>
			<button onClick={newUser}>add user</button>
			{}
			<AddTodoForm />
			<TodoList />
			<TotalCompleteItems />
		</div>
	);
};

export default App;
