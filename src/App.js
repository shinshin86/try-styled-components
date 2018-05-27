import React, { Component } from 'react';
import logo from './logo.svg';
import styled, { css, keyframes } from 'styled-components';
import CustomForm from './CustomForm';

/*** styled components ***/
const AppBody = styled.div`
  text-align: center;
`;

// should define beore AppLogo
const AppLogoSpin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const AppLogo = styled.img`
  animation: ${AppLogoSpin} infinite 20s linear;
  height: 80px;
`;

const AppHeader = styled.header`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`;

const AppTitle = styled.h1`
  font-size: 1.5em;
`;

const AppIntro = styled.p`
  font-size: large;
`;

const Button = styled.button`
  border-radius: 3px;
  padding: 0.25em 1em;
  margin: 0 1em;
  background: transparent;
  color: palevioletred;
  border: 2px solid palevioletred;

  ${props =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `} ${props =>
    props.large &&
    css`
      border: 5px solid palevioletred;
      font-size: 26px;
    `};
`;

class App extends Component {
  render() {
    return (
      <AppBody>
        <AppHeader>
          <AppLogo src={logo} alt="logo" />
          <AppTitle>Try styled components with react create app</AppTitle>
        </AppHeader>
        <AppIntro>
          <Button>Normal Button</Button>
          <Button primary>primary button</Button>
          <Button primary large>
            large primary button
          </Button>
        </AppIntro>
        <CustomForm />
      </AppBody>
    );
  }
}

export default App;
