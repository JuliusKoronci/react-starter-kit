// @flow
import React, { Component } from 'react';
import ThemeProvider from '../Theme';

class App extends Component {
	static displayName = 'App';
	
	render() {
		const { children, ...others } = this.props;
		return (
			<ThemeProvider children={children} {...others} />
		);
	}
}

export default App;