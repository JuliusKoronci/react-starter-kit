import React from 'react';
import renderer from 'react-test-renderer';

import {HomePage} from './';

it('renders correctly', () => {
  const tree = renderer.create(
    <HomePage><p>Test</p></HomePage>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
