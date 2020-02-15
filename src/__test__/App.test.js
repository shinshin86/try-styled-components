import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import App from '../App';

test('App Snapshot', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});
