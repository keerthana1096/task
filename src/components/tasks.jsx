/* eslint-disable no-use-before-define */
/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React from 'react'
import Card from '@material-ui/core/Card'

import Button from '@material-ui/core/Button'
import { useHistory } from 'react-router'

export default ({ task: { title, description, id, completed, enddate, currentdate }, onDelete, onEdit }) => {
  const history = useHistory()
  const date1 = new Date()
  console.log(date1)
  const date2 = new Date(enddate)
  const diffInMs = (date2.getTime() - date1.getTime())

  const count = Math.ceil(diffInMs / 1000)
  let color
  let errormessage
  if (completed === false && count > 60) {
    color = 'yellow'
  } else if (completed === false && count < 60) {
    color = 'red'
    errormessage = 'Task time is going to complete or completed please complete before time'
  } else if (completed === true) {
    color = 'green'
  }
  console.log(count)
  function handleClick () {
    history.push({ pathname: '/editTask', title: title, id: id, description: description, startDate: currentdate, endDate: enddate, completed: completed })
  }
  return (
      <div >
        <Card style={{ backgroundColor: color }}>
        <h2>{ title }</h2>
        <br/>
        <h3>{ description}</h3>
        <br/>
        <h6>Started at:{currentdate}</h6>
        <br/>
        <h4>due at:{enddate}</h4>
        <h5>{errormessage}</h5>
         <br/>
        <Button variant="contained" color="secondary" onClick={() => onDelete(id)}>
          Remove
        </Button>
        <Button variant="contained" color="primary" onClick={() => handleClick() }>
            Edit
        </Button>
        </Card>

        <br/>
        <br/>
      </div>
  )
}
