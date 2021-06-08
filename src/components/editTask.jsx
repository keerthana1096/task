/* eslint-disable no-use-before-define */
/* eslint-disable react/prop-types */
import React from 'react'
import Card from '@material-ui/core/Card'

import Button from '@material-ui/core/Button'
// import editTask from '../actions/postTask'
import axios from 'axios'
import TextField from '@material-ui/core/TextField'
import Checkbox from '@material-ui/core/Checkbox'
import { fetchAllTasks } from '../actions/postTask.js'

class EditTask extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      title: this.props.location.title,
      description: this.props.location.description,
      startDate: this.props.location.startDate,
      endDate: this.props.location.endDate,
      completed: this.props.location.completed
    }

    console.log(this.props)
  }

handleedit=(e) => {
  console.log(this.state)
  let prev
  axios.get('http://localhost:3000/tasks/' + this.props.location.id).then(response => {
    prev = response.data
  })
  axios.patch('http://localhost:3000/tasks/' + this.props.location.id, {
    ...prev,
    title: this.state.itle,
    description: this.state.description,
    currentdate: this.state.startDate,
    enddate: this.state.endDate,
    completed: this.state.completed

  }).then(response => console.log(response))

  e.preventDefault()
 
  fetchAllTasks()
  this.props.history.push('/')
}

handleChane=e => {
  this.setState({
    [e.target.name]: e.target.value
  }, () => { console.log(this.state) })
}

render () {
  return (<div>
         <div className="row">
             <div className="col-md-4"/>
             <div className="col-md-4">
               <Card>
               <form onSubmit={this.handleedit}>
            <TextField placeholder={this.state.title} name="title" onChange={this.handleChane} variant="outlined"/>
            <br/>
            <br/>
            <TextField placeholder={this.state.description} name="description" onChange={this.handleChane} variant="outlined"/><br/>
         <br/>   <TextField
        id="endDate"
        name="endDate"
        label="Due date"
        type="datetime-local"
        defaultValue={this.state.endDate}
        onChange={this.handleChane}
        format="dd/MM/yyyy"
        InputLabelProps={{
          shrink: true
        }}/>
        <br/>
        <h5>Completed <Checkbox
         checked={this.state.completed}
        onChange={() => { this.setState({ completed: !this.state.completed }) }}
        inputProps={{ 'aria-label': 'Completed' }}
      /></h5>
        <br/>
            <Button type="submit" variant="outlined">Submit</Button>
            <Button onClick={this.handleReset} variant="outlined">Cancel</Button>
            </form>
                   </Card>
             </div>
             <div className="col-md-4"/>
         </div>
        </div>)
}
}
export default EditTask
