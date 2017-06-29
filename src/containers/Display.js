import React from 'react'
import {connect} from 'react-redux'

const Output = ({content}) => (
	<div>
		<textarea row='4' cols='50'> {content} </textarea>
	</div>
)

const mapStateToProps = (state, ownProps) => ({
	content:"Dispaly mapStateToProps test"
})

const Display = connect(mapStateToProps)(Output)

export default Display
