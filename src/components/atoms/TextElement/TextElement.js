// @flow
import React, { PropTypes } from 'react';

const TextElement = ({ children }: { children: any }) => (
	<div>{children}</div>
);

TextElement.displayName = 'TextElement';
TextElement.propTypes = {
	children: PropTypes.node.isRequired
};

export default TextElement;