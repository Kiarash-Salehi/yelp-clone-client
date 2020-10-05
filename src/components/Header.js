import React, { useContext } from 'react';
import { MessageContext } from '../context/MessageContext';
import '../index.css';

function Header() {
	const { message, setMessage } = useContext(MessageContext);
	return (
		<div>
			<h1 className="font-weight-light display-1 text-center">Restaurant Finder</h1>
			{message && (
				<div className={`alert alert-${message.type} alert-dismissible fade show come-in`} role="alert">
					{message.text}
					<button type="button" className="close" onClick={() => setMessage(null)}>
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
			)}
		</div>
	);
}

export default Header;
