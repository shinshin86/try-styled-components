import React from 'react';
import renderer from 'react-test-renderer';
import CustomForm from '../CustomForm';
import 'jest-styled-components';

test('CustomForm Snapshot', () => {
  const tree = renderer.create(<CustomForm />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('CustomForm have margin and padding 16px', () => {
  const tree = renderer.create(<CustomForm />).toJSON();
  expect(tree).toHaveStyleRule('margin', '16px');
  expect(tree).toHaveStyleRule('padding', '16px');
});
