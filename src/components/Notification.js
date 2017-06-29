import React from 'react'

const Notification = ({content,onClick}) => (
	<div>
		<textarea rows='4' cols='50'>
			{content}
		</textarea>
		<button>
			Update
		</button>

	</div>
)

export default Notification
