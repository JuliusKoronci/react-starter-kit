// @flow
import React, { PropTypes, Component } from 'react';

class Input extends Component {
	
	static displayName = 'Input';
	
	static defaultProps = {
		value: 'no value defined',
		type: 'text',
		onChange: () => {
			// read only input
		},
	};
	
	static propTypes = {
		value: PropTypes.oneOfType([
			PropTypes.string,
			PropTypes.number
		]),
		type: PropTypes.string.isRequired,
	};
	
	render() {
		const { ...others } = this.props;
		return (
			<input {...others} />
		);
	}
}

export default Input;