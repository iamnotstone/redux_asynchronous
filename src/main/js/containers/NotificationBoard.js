import {connect} from 'react-redux'
import Notification from '../components/Notification'
import {inputContentChanged,fetchPost} from '../actions'


const mapStateToProps = (state) => ({
	content:state.get('inputContent')
})

const mapDispatchToProps = (dispatch) => ({
	onClick: (content) => {
		dispatch(fetchPost(content))
	},
	onChange:(value) => {
		dispatch(inputContentChanged(value))
	}
})

const NotificationBoard = connect(mapStateToProps,mapDispatchToProps)(Notification)

export default NotificationBoard
