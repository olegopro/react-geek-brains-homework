import React, { useState } from 'react'
// import classes from './MessageInput.module.scss'

const MessageInput = props => {
	// Создаю 2 стейта для инпутов Имя и Текст
	const [inputMessage, setInputMessage] = useState('')
	const [inputName, setInputName] = useState('')

	return (
		<div className="input-group mb-3 mt-4">
			<input
				type="text"
				// Присваиваю новое значение инпуту через useState на 6 строке
				value={inputName}
				// Создаю событие и изменяю стейт, и value с помощью setInputMessage на строке 6
				onChange={event => setInputName(event.target.value)}
				className="form-control text-left shadow-none w-10"
				placeholder="Имя"
			/>
			<input
				type="text"
				// Аналогично, как и на первом инпуте
				value={inputMessage}
				onChange={event => setInputMessage(event.target.value)}
				style={{ width: '50%' }}
				className="form-control text-left shadow-none message"
				placeholder="Введите сообщение..."
			/>

			<button
				className="btn btn-primary shadow-none"
				// Вешаю стрелочную функцию на событые onClick,
				// в стрелочной функции беру пропс из App компонента,
				// который специально создал там, что бы использовать его здесь
				// что бы передать в App.js параметры из этого компонента
				onClick={() => {
					props.onChangeMessage({ name: inputName, text: inputMessage })
				}}
			>
				Отправить сообщение
			</button>
		</div>
	)
}

export default MessageInput
