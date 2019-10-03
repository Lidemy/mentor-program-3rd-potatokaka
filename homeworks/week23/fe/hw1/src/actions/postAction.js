import { GET_LATEST_POSTS, GET_ALL_POSTS, GET_SINGLE_POST, CREATE_POST, DELETE_POST, EDIT_POST} from './actionType';
import axios from 'axios';

export function getLatestPosts() {
  const request = axios.get('https://qootest.com/posts?_limit=8&_sort=id&_order=desc');
  return {
    type: GET_LATEST_POSTS,
    payload: request
  }
}

export function getAllPosts() {
  const request = axios.get('https://qootest.com/posts?_sort=id&_order=desc');
  return {
    type: GET_ALL_POSTS,
    payload: request
  }
}

export const getSinglePost = id => ({
  type: GET_SINGLE_POST,
  payload: axios.get(`https://qootest.com/posts/${id}`)
});

export const createPost = (author, title, body ) => ({
  type: CREATE_POST,
  payload: axios.post('https://qootest.com/posts', {
    author, title, body, 
  }),
})

export const deletePost = id => ({
  type: DELETE_POST,
  payload: axios.delete(`https://qootest.com/posts/${id}`)
})

export const editPost = (id, author, title, body) => ({
  type: EDIT_POST,
  payload: axios.put(`https://qootest.com/posts/${id}`, {
    author, title, body,
  })
});

