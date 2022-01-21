//{id, title, comments: [{id: 1, userId: 1, comment: "d"}], {votes: {up: 0 , down: 0}}}

//ACTION TYPES
//ADD_POST, REMOVE_POST(id), UPDATE_POST(id, title), ADD_COMMENT(id, userId, comment), REMOVE_COMMENT(id), REMOVE_USER_COMMENTS(userId), ADD_UP_VOTE(id), ADD_DOWN_VOTE(id)
import { v4 as uuidv4 } from "uuid";
const ADD_POST = "ADD_POST";
const REMOVE_POST = "REMOVE_POST"
const UPDATE_POST = "UPDATE_POST"
const ADD_COMMENT = "ADD_COMMENT"
const REMOVE_COMMENT = "REMOVE_COMMENT"
const REMOVE_USER_COMMENTS = "REMOVE_USER_COMMENTS"
const ADD_UP_VOTE = "ADD_UP_VOTE"
const ADD_DOWN_VOTE = "ADD_DOWN_VOTE"

//ACTION CREATORS
export const addPost = (id, title) => ({
  type: ADD_POST,
  payload: {id, title, comments:[], votes: {up: 0, down:0}}
});

export const removePost = (id) => ({
  type: REMOVE_POST,
  payload: id,
})

export const updatePost = (id, title) => ({
  type: UPDATE_POST,
  payload: {id, title}
})

export const addComment = (id, commentId, userId, comment) => ({
  type: ADD_COMMENT,
  payload: {id, commentId, userId, comment}
})

export const removeComment = (commentId) => ({
  type: REMOVE_COMMENT,
  payload: commentId
})

export const removeUserComment = (userId) => ({
  type: REMOVE_USER_COMMENTS,
  payload: userId
})

export const addUpVote = (id) => ({
  type: ADD_UP_VOTE,
  payload: id
})

export const addDownVote = (id) => ({
  type: ADD_DOWN_VOTE,
  payload: id,
})

//REDUCER
const postReducer = (posts = [], action) => {
  switch(action.type){
    case ADD_POST:
      return [...posts, action.payload]
    case REMOVE_POST:
      return posts.filter(item => item.id != action.payload)
    case UPDATE_POST:
      return posts.map(item => {
        if(item.id == action.payload.id){
          return {...item, title: action.payload.title}
        }
        return item;
      })
    case ADD_COMMENT:
      return posts.map(item => {
        if(item.id == action.payload.id){
          return {...item, comments: [...item.comments, {commentId: action.payload.commentId, userId: action.payload.userId, comment: action.payload.comment}]}
        }
        return item;
      })
    case REMOVE_COMMENT:
      return posts.map(item => {
        return {...item, comments: item.comments.filter(c => c.commentId != action.payload)}
      })
    case REMOVE_USER_COMMENTS:
      return posts.map(item => {
        return {...item, comments: item.comments.filter(c => c.userId != action.payload)}
      })
    case ADD_UP_VOTE:
      return posts.map(item => {
        if(item.id == action.payload){
          return {...item, votes: {...item.votes, up: item.votes.up + 1}}
        }
        return item;
      })
    case ADD_DOWN_VOTE:
      return posts.map(item => {
        if(item.id == action.payload){
          return {...item, votes: {...item.votes, down: item.votes.down - 1 }}
        }
      })

    default:
      return posts
  }
}

export default postReducer;