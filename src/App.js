/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
import React from 'react'
import NewTask from './components/newTask.jsx'
import CreateTask from './containers/createTask'
import EditTask from './components/editTask'
import TaskList from './containers/displayTasks'
import NavBar from './components/appBar'
import Home from './components/home'
import { Route, Link, Switch } from 'react-router-dom'
class App extends React.Component {
  render () {
    return (<div>
       <NavBar/>
       
      
         <br/>
         <Switch>
            <Route path="/" exact strict component={Home}/>
            <Route path="/addTask" exact component={CreateTask}/>
            <Route path="/editTask" exact component={EditTask}/>
            </Switch>
        </div>)
  }
}
export default App
