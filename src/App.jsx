// App.js

import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react'
import Alert from './Components/Alert';

function App() {
	// < !--Using the React hook for 
	// the dark Mode functionality-- >
	const [mode, setMode] = useState('light');
	const [attension, setAttension] = useState(null)
	const showAlert =
		(message, type) => {
			setAttension({
				msg: message,
				type: type
			});
			setTimeout(() => {
				setAttension(null);
			}, 2000);
		}

	// < !--Enable the dark mode-- >
	const toggleMode = () => {
		if (mode === 'light') {
			setMode('dark');
			document.body
				.style.backgroundColor = 
					'rgb(110 118 131)';
			showAlert("Dark Mode", "success");
		} else {
			setMode('light')
			document.body
				.style.backgroundColor = 'white';
			showAlert("Light Mode", "success");
		}
	}
	return (
		<>
			<Navbar title="TextConverter"
				mode={mode}
				toggleMode={toggleMode} />
			<Alert attension={attension} />
			<div className="container my-3">
				{
					<TextForm showAlert={showAlert}
						heading="Enter the text to analyze below"
						mode={mode} />
				}
			</div>
		</>
	);
}
export default App;
