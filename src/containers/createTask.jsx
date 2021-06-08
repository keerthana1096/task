import { connect } from 'react-redux'
import { postTask } from '../actions/postTask'
import NewTask from '../components/newTask'

const mapDispatchToProps = dispatch => {
  return {
    onAddPost: task => {
      dispatch(postTask(task))
    }
  }
}

export default connect(
  null,
  mapDispatchToProps
)(NewTask)
