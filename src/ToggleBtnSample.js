import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin: 30px;
  padding: 30px;
  border: solid 1px #ccc;
`;

const ExBtnContainer = styled.div`
  margin: 100px;
  border: solid 1px #ccc;
`;

const ToggleBtn = styled.button`
  background: #134a63;
  color: #eee;
  width: 300px;
  height: 50px;
  margin: 30px;
  ${({ show }) =>
    show &&
    `
    background: #DE5065;
  `};
`;

const ExToggleBtn = styled(ToggleBtn)`
  color: #de5;
  width: 250px;
  height: 70px;
  ${({ show }) =>
    show &&
    `
    background: #89e;
  `};
`;

export default class ToggleBtnSample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false
    };
    this.handleToggleBtn = this.handleToggleBtn.bind(this);
  }

  handleToggleBtn() {
    this.setState({ isShow: !this.state.isShow });
  }

  render() {
    return (
      <Container>
        <ToggleBtn show={this.state.isShow} onClick={this.handleToggleBtn}>
          Toggle Button
        </ToggleBtn>
        <ExBtnContainer>
          <ExToggleBtn show={this.state.isShow} onClick={this.handleToggleBtn}>
            Toggle Button
          </ExToggleBtn>
        </ExBtnContainer>
      </Container>
    );
  }
}
