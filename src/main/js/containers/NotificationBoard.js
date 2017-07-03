import {connect} from 'react-redux'
import Notification from '../components/Notification'
import {inputContentChanged} from '../actions'


const mapStateToProps = (state) => ({
	content:state.get('inputContent')
})

const mapDispatchToProps = (dispatch) => ({
	onClick: () => {
		console.log("mapDispathToProps test")
	},
	onChange:(value) => {
		dispatch(inputContentChanged(value))
	}
})

const NotificationBoard = connect(mapStateToProps,mapDispatchToProps)(Notification)

export default NotificationBoard
