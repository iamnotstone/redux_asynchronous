import {connect} from 'react-redux'
import Notification from '../components/Notification'


const mapStateToProps = (state, ownProps) => ({
	content:"mapStateToProps test"
})

const mapDispatchToProps = (dispatch, ownProps) => ({
	onClick: () => {
		console.log("mapDispathToProps test")
	}
})

const NotificationBoard = connect(mapStateToProps,mapDispatchToProps)(Notification)

export default NotificationBoard
