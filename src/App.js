import Modal from './Modal';
import './scss/style.scss';
import { useRef } from 'react';

function App() {
	const open = useRef(null);

	const handleOpen = () => {
		console.log(open.current);
		open.current.open();
	};

	return (
		<div className='wrap'>
			<button onClick={handleOpen}>open</button>
			<Modal ref={open} />
		</div>
	);
}

export default App;
