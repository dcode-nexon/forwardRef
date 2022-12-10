import { forwardRef, useImperativeHandle, useState } from 'react';

const modalStyle = {
	width: 400,
	height: 300,
	background: '#222',
	position: 'fixed',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%,-50%)',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	fontSize: 50,
	color: '#fff',
};

const btn = {
	position: 'absolute',
	top: 30,
	right: 30,
	cursor: 'pointer',
	color: 'orange',
	fontSize: 16,
};

const Modal = forwardRef((_, el) => {
	const [Open, setOpen] = useState(false);

	useImperativeHandle(el, () => {
		return {
			open: () => setOpen(true),
		};
	});
	return (
		<>
			{Open && (
				<aside style={modalStyle}>
					<h1>Modal</h1>
					<span style={btn} onClick={() => setOpen(false)}>
						close
					</span>
				</aside>
			)}
		</>
	);
});

export default Modal;
