import React from 'react';
import styled from 'styled-components';
import logo from './logo.svg';

const CustomInput = styled.input.attrs({
  type: props => props.type || 'text',
  margin: props => props.size || '1em',
  padding: props => props.size || '1em'
})`
  color: palevioletred;
  font-size: 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;

  type: ${props => props.type};
  margin: ${props => props.margin}
  padding: ${props => props.padding}
`;

const CustomField = styled.p`
  margin: 10px;
  padding: 10px;
  background-color: grey;
`;

const Title = styled.h2`
  border-bottom: solid 1px palevioletred;
`;

const Content = styled.div`
  border: solid 1px grey;
  margin: 10px;
  padding: 10px;
`;

const CustomForm = () => (
  <Content>
    <Title>Custom Form</Title>
    <CustomInput placeholder="text is here" type="text" />
    <CustomInput placeholder="date is here" type="date" />
    <CustomInput placeholder="password is here" type="password" />
    <p>
      <CustomInput placeholder="password is here" type="email" size="3em" />
    </p>
    <CustomField>
      <CustomInput
        placeholder="password is here"
        type="image"
        src={logo}
        alt="react logo"
        width="200"
        height="200"
        size="12px"
      />
    </CustomField>
    <CustomInput type="submit" value="submit" />
  </Content>
);

export default CustomForm;
