/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import axios from 'axios'

import { ADD_TASK, DELETE_TASK, FETCH_TASK } from './types'
export function postTask (data) {
  axios.post('http://localhost:3000/tasks', {

    title: data.title,
    description: data.description,
    currentdate: data.startDate,
    enddate: data.endDate,
    completed: data.completed

  }, { headers: { 'content-type': 'application/json' } }).then((response) => {
    alert(response.data)
    console.log(response.data)
    return dispatch => {
      dispatch(createTaskSuccess(response.data))
      dispatch(fetchAllTasks())
    }
  }).catch((error) => {
    console.log(error)
  })
}

export const createTaskSuccess = (data) => {
  return {
    type: ADD_TASK,
    payload: {
      id: data.id,
      title: data.title,
      description: data.description
    }
  }
}
export function editTask (id, data) {
  console.log(id)
}
export const fetchTasks = (tasks) => {
  return {
    type: FETCH_TASK,
    tasks
  }
}
export const fetchAllTasks = () => {
  return (dispatch) => {
    return axios.get('http://localhost:3000/tasks')
      .then(response => {
        dispatch(fetchTasks(response.data))
      })
      .catch(error => {
        throw (error)
      })
  }
}
export function deleteTask (id) {
  return (dispatch) => {
    axios.delete('http://localhost:3000/tasks/' + id).then((response) => {
      dispatch(fetchAllTasks())
    })
  }
}
export const deleteTaskSuccess = id => {
  return {
    type: DELETE_TASK,
    payload: {
      id
    }
  }
}
