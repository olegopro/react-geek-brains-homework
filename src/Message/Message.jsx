import React from 'react'
import classes from './Message.module.scss'

const Message = ({ messageData }) => {
	return (
		<div className={classes.Message}>
			<p>
				Message content from App.js - <strong>{messageData}</strong>
			</p>
		</div>
	)
}

export default Message
