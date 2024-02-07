import logo from './assets/logo.svg';
import { TimeComponent } from './components/Time/Time';
import './App.css';

export const App = () => {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.jsx</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
				<TimeComponent />
			</header>
		</div>
	);
};
// MyComponent({ type: 'normal', value: '123' });