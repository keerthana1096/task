
import { ADD_TASK, DELETE_TASK, FETCH_TASK } from '../actions/types'

export default function taskReducer (state = [], action) {
  switch (action.type) {
    case ADD_TASK:
      return [...state, action.payload]
    case DELETE_TASK:
      return state.filter(task => task._id !== action.payload.id)
    case FETCH_TASK:
      return action.tasks
    default:
      return state
  }
}
