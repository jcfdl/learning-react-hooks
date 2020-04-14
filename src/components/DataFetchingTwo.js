import React, {useEffect, useReducer} from 'react';
import Axios from 'axios';

const initialState = {
  loading: true,
  post: {},
  error: ''
}
const reducer = (state, action) => {
  switch(action.response) {
    case 'success':
      return {
        loading: false,
        post: action.payload,
        error: ''
      }
    case 'error':
      return {
        loading: false,
        post: {},
        error: 'Something went wrong!'
      }
    default:
      return state
  }
}

function DataFetchingTwo() {

  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    Axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => {
      dispatch({
        response: 'success', payload: response.data
      })
    })
    .catch(error => {
      dispatch({response: 'error'})
    })
  })

  return (
    <div>
      {state.loading ? 'Loading' : state.post.title}
      {state.error ? state.error : ''}
    </div>
  )
}

export default DataFetchingTwo;
