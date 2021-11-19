import React, { useEffect, useState } from 'react'
import MessageInput from './MessageInput'
import MessagesList from './MessagesList'

function App() {
	const state = {
		header: 'Мессенджер',
		messages: [
			{
				name: 'Маша',
				text: 'Привет из React'
			},
			{
				name: 'Денис',
				text: 'Привет из Vue'
			},
			{
				name: 'Валера',
				text: 'Привет из Angular'
			}
		]
	}

	// Создаю стейт из объекта state.messages
	const [messages, setMessage] = useState(state.messages)

	// Добавляю обработчик события для MessageInput
	const addMessages = input => {
		// Добавляю новые данные к существующему state
		setMessage(state => {
			// делаю spread что бы не мутировать состояние
			return [...state, input]
		})
	}

	useEffect(() => {
		// ВОПРОС: Как сделать короче проверку на последнее сообщение в массиве messages ?
		if (messages.slice(-1).find(doc => doc.text).name === 'Админ') return null

		// ВОПРОС 1: Как пропустить запуск useEffect при первом рендере компонента ?
		// ВОПРОС 2: Как вытащить имя автора с последнего сообщения, что бы встаить его в ответ
		// например : Ждите 'Олег', Вам скоро ответят'
		setMessage(state => {
			return [...state, { name: 'Админ', text: 'Ждите, Вам скоро ответят' }]
		})
	}, [messages])

	return (
		<div className="px-4 py-5 my-5 text-center">
			{/* Беру тупо из state потому что не сбираюсь его изменять */}
			<h1>{state.header}</h1>

			{/* Создаю объект(prop) messagesData и передаю в него messages из 25 строки */}
			<MessagesList messagesData={messages} />

			{/* Создаю собитые(prop) onChangeMessage и привязываю к нему функцию addMessages из 28 строки */}
			<MessageInput onChangeMessage={addMessages} />
		</div>
	)
}

export default App
