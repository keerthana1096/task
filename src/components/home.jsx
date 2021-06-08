/* eslint-disable react/prop-types */
/* eslint-disable no-use-before-define */
import React from 'react'
import Button from '@material-ui/core/Button'
// import CreateTask from '../containers/createTask'
import TaskList from '../containers/displayTasks'
import CreateTask from '../containers/createTask'

class Home extends React.Component {
handleClick=() => {
    
  this.props.history.push('/addTask')
}

  render () {
    return (<div>
            <div className="row">
                <div className="col-md -8"/>
                <div className="col-md-3">
                    <Button variant="contained" onClick={()=>{this.handleClick()}} color="primary">Add Task</Button>
                </div>
            </div>
            <div className="row">
<div className='col-md-2'/>
<div className='col-md-5'>
<TaskList/>
</div>
            </div>
        </div>)
  }
}
export default Home
