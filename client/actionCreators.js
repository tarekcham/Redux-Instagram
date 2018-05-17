// increment 
export function increment(index) {
	return {
		type: "INCREMENT_LINKES",
		index: 
	}
}


// add comment 
export function addComment(postId, author, comment){
	return {
		type: "ADD_COMMENT"
		postId,
		authro,
		comment
	}
}

// remove comment
export function removeComment(postId, i ) {
	return {
		type: 'REMVOE_COMMENT',
		i,
		postId
	}
}

