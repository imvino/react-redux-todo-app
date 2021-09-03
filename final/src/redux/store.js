import { configureStore } from '@reduxjs/toolkit';
import todos from './todoSlice';
import users from './users'

export default configureStore({
	reducer: {
		todos: todos,
		 user: users,
	},
});
