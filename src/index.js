import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary.component';
import Spinner from './components/Spinner/Spinner.component';

ReactDOM.render(
	<Suspense fallback={<Spinner />} >
		<ErrorBoundary >
			<App />
		</ErrorBoundary>
	</Suspense>,
	document.getElementById('root')
);
