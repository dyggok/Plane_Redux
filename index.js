//import { hello } from './reduxStore/store'

import store from "./reduxStore";
import {increment, decrement} from './reduxStore/counter'
import {addTask, removeTask} from './reduxStore/tasks'
import {addComment, addDownVote, addPost, addUpVote, removeComment, removePost, removeUserComment, updatePost} from './reduxStore/posts'

store.subscribe(() => console.log(store.getState()))
store.dispatch(increment());
store.dispatch(addPost(1, "Deneme"));
store.dispatch(addPost(2, "Deneme2"));
store.dispatch(addUpVote(1));
store.dispatch(updatePost(2, "Test"))
store.dispatch(addComment(1, 1, 2, "1 idli postun comment bilgisi"))
store.dispatch(addComment(1, 2, 2, "1 idli postun ikinci comment bilgisi"))
store.dispatch(removeUserComment(2))
console.log(store.getState().posts[0].comments)