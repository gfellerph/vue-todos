// module.exports = {}
export default {
	state: {
		todos: [],
		activeFilter: -1,
	}, 
	mutations: {
		ADD_TODO: function (state, action) {
			state.todos.push(action.todo);
		},
		CHANGE_FILTER: function (state, action) {
			state.activeFilter = action.activeFilter;
		}
	}
}
