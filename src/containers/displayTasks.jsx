/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
/* eslint-disable react/prop-types */
import React from 'react'
import { connect } from 'react-redux'
import Task from '../components/tasks'
import { deleteTask, editTask } from '../actions/postTask'
// eslint-disable-next-line no-unused-vars

function TaskList ({ tasks, onDelete, onEdit }) {
  if (!tasks.length) {
    return (
      <div>
        No tasks
      </div>
    )
  }
  return (
    <div>
      {tasks.map(task => {
        return (
          <Task task={ task } onDelete={ onDelete } onEdit={onEdit} key={ task.id } />
        )
      })}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    tasks: state.tasks
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onDelete: id => {
      dispatch(deleteTask(id))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList)
