import React from 'react';
import renderer from 'react-test-renderer';
import ToggleBtnSample from '../ToggleBtnSample';
import 'jest-styled-components';

test('ToggleBtnSample Snapshot', () => {
  const tree = renderer.create(<ToggleBtnSample />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('ToggleBtnSample have border', () => {
  const tree = renderer.create(<ToggleBtnSample />).toJSON();
  expect(tree).toHaveStyleRule('border', 'solid 1px #ccc');
});
