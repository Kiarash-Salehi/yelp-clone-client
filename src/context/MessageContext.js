import React, { useState, createContext } from 'react';

export const MessageContext = createContext();

export const MessageContextProvider = (props) => {
	const [message, setMessage] = useState(null);
	const showMessage = message => {
		setMessage(message);
		setTimeout(() => {
			setMessage(null);
		}, 3000);
	};
	return (
		<MessageContext.Provider value={{ message, setMessage, showMessage }}>
			{props.children}
		</MessageContext.Provider>
	);
};
