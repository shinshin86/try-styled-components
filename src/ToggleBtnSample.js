import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin: 30px;
  width: 100%;
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
      </Container>
    );
  }
}
