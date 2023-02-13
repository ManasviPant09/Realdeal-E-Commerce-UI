import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import {authUser} from '../redux/authSlice';
import { useNavigate } from 'react-router-dom';
import { mobile } from "../responsive";

const WelcomeBack = () => {
  const user = useSelector(authUser);
  const navigate = useNavigate();
  const productEvent=()=>{
    navigate("/shoppingcart");
  }
  const logoutEvent=()=>{
    navigate("/");
  }
  return (
    <div>
      <Container>
        <Wrapper>
        <Title>Welcome Back to REALDEAL {user.username}!</Title>
        <Button onClick={productEvent}>Continue Shopping</Button>
        <Button onClick={logoutEvent}>Logout</Button>
        </Wrapper>
      </Container>
    </div>
  );
}
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    rgba(255, 255, 255, 0.3),
    rgba(255, 255, 255, 0.3)
  ),
  url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
    center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 50%;
  padding: 20px;
  margin-right: 30%;
  ${mobile({ width: "75%" })}
`;
const Title = styled.h1`
   font-weight: 500;
   color: #606060;
   margin-right: 500px;
   margin-bottom: 40px;
`;
const Button = styled.button`
  display: flex;
  flex-direction: row;
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;
export default WelcomeBack;