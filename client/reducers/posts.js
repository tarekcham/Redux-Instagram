// a reducers takes in two things: 

// 1. the action (info about what happend)
// 2. copy of current state

function posts(state = [], action) {
	console.log(state, action);
	return state;
}

export default posts;

