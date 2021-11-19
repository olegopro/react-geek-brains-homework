import React from 'react'
// import classes from './MessagesList.module.scss'

//Получаю из App.js props и делаю деструктуризацию, получаю messagesData
const MessagesList = ({ messagesData }) => {
	return (
		<ul className="list-group mt-4">
			{/* Перебираю массив объектов функцией map */}
			{messagesData.map((messages, index) => {
				return (
					// Обязательно добавляю key для итерируемого списка
					// У функции map опционально всегда есть второй параметр
					// - это ключ массива его и присваивам key
					<li className="list-group-item" key={index}>
						{messages.name}: {messages.text}
					</li>
				)
			})}
		</ul>
	)
}

export default MessagesList
