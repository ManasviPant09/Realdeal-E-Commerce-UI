import React from 'react';
import styled from 'styled-components';
const Announcements = () => {
  return (
    <Container>Use Code &nbsp;<i>'SEASON20'</i>&nbsp;and get additional 20% OFF!
    </Container>
  );
}

const Container = styled.div`
  display : flex;
  justify-content: center;
  text-align : center;
  align-items : center;
  background : #825f5b;
  height: 30px;
  font-weight : 500;
  color : white;
  white-space: pre;
  float:left;
  clear:left;
  min-width : 100%;
`
export default Announcements;