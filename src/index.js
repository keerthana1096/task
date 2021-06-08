/* eslint-disable no-use-before-define */
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import 'regenerator-runtime/runtime'
import 'bootstrap/dist/css/bootstrap.css'
import rootReducer from './reducers'
import { fetchAllTasks } from './actions/postTask.js'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
const store = createStore(rootReducer, applyMiddleware(thunk))

store.dispatch(fetchAllTasks())
const mountNode = document.getElementById('app')
ReactDOM.render(<BrowserRouter><Provider store={store}><App/></Provider></BrowserRouter>, mountNode)
