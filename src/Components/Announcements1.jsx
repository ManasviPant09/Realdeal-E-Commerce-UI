import React from 'react';
import styled from 'styled-components';
const Announcements1 = () => {
  return (
    <Container>Free Shipping on orders above ₹999!
    </Container>
  );
}

const Container = styled.div`
  display : flex;
  justify-content: center;
  text-align : center;
  align-items : center;
  background : gray;
  height: 25px;
  font-weight : 500;
  color : white;
  white-space: pre;
  float:left;
  clear:left;
  margin-top: 4%;
  min-width : 100%;
`
export default Announcements1;