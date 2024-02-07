import { useState } from 'react';

export const MyComponent = () => {
	const [obj, setObj] = useState({ a: 10, b: 20, c: 30 });

	// obj.a = 20; // так делать нельзя

	// setObj({ a: 20, b: 20, c: 30 }); // в react НАДО ТАК!

	if (obj.a === 10) {
		setObj({ ...obj, a: 20 }); // если в объекте много свойств, а поменять надо только одно
	}

	return <div>{obj.a}</div>;
};
