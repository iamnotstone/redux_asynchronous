import React from 'react'

const Notification = ({content,onClick,onChange}) => (
	<div>
		<textarea value = {content} onChange = {e => {
			e.preventDefault()
			onChange(e.target.value)
		}}>
		</textarea>
		<div>
			<button onClick = {onClick}>
				Update
			</button>
		</div>

	</div>
)

export default Notification
