import { useState } from 'react';
import styles from './MyComponent.module.css';

export const MyComponent = () => {
	const [showRedText, setShowRedText] = useState(true);

	const onClick = () => {
		setShowRedText(!showRedText);
	};

	const text = <div className={showRedText ? styles.red : styles.white}>Текст</div>;

	return (
		<>
			{text}
			<button onClick={onClick} id={Date.now()}>
				Изменить цвет текста
			</button>
		</>
	);
};
