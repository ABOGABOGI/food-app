import * as React from 'react'
import '../styles/index.css';
import { GlobalStyles } from 'twin.macro';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<GlobalStyles />
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
