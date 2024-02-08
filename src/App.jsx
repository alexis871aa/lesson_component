import { TimeComponent } from './components/Time/Time';
import { MyComponent } from './components/MyComponent/MyComponent';
import styles from './App.module.css';

export const App = () => {
	return (
		<div className={styles.app}>
			<header className={styles.header}>
				<TimeComponent />
				<MyComponent />
			</header>
		</div>
	);
};
// MyComponent({ type: 'normal', value: '123' });
