import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import PageContainer from '../src/components/PageContainer/PageContainer';
import './App.css';

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<PageContainer />
			</div>
		</Provider>
	);
}

export default App;
