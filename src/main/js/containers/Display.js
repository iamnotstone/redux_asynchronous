import React from 'react'
import {connect} from 'react-redux'
import {Map} from 'immutable'

const Output = ({content}) => (
	<div>
		<textarea value = {content} onChange = {() => (console.log("Display's content is not mutable by user"))}> </textarea>
	</div>
)

const mapStateToProps = (state, ownProps) => ({
	content:state.get('outputContent')
})

const Display = connect(mapStateToProps)(Output)

export default Display
