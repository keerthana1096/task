/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
import React from 'react'
import Card from '@material-ui/core/Card'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import {postTask,fetchAllTasks} from '../actions/postTask'

class NewTask extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      title: '',
      description: '',
      startDate: new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate(),
      endDate: '',
      completed: false
    }
  }

    handleChange=e => {
      this.setState({
        [e.target.name]: e.target.value
      }, () => { console.log(this.state) })
    }

    handleSubmit=(e) => {
      console.log(this.state)
      const data = postTask(this.state)
      alert(data)
      e.preventDefault()
      fetchAllTasks()
      this.props.history.push('/')
    }

    handleReset=() => {
      this.setState({
        title: '',
        description: '',
        startDate: Date().toLocaleString(),
        endDate: '',
        completed: false

      })
    }

    render () {
      return (<div>
<div className="row">
    <div className="col-md-4"/>
    <div className="col-md-4">
        <Card>
            <center>New Task</center>
            <br/>
            <form onSubmit={this.handleSubmit}>
            <TextField placeholder="Enter title" name="title" onChange={this.handleChange} variant="outlined"/>
            <br/>
            <br/>
            <TextField placeholder="Enter task" name="description" onChange={this.handleChange} variant="outlined"/><br/>
         <br/>   <TextField
        id="endDate"
        name="endDate"
        label="Due date"
        type="datetime-local"
        defaultValue={this.state.startDate}
        onChange={this.handleChange}
        format="dd/MM/yyyy"
        InputLabelProps={{
          shrink: true
        }}/>
        <br/>
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
export default NewTask
