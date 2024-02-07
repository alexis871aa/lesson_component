import { useState } from 'react';
import { getTimeFromDate } from '/src/utils/utils';

export const TimeComponent = () => {
	const [currentDate, setCurrentDate] = useState(new Date());

	setTimeout(() => setCurrentDate(new Date()), 1000);

	return <div>{getTimeFromDate(currentDate)}</div>;
};
