import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { register, selectUser } from "../redux/userSlice";
import { mobile } from "../responsive";

const Register = () => {
  const [detail,setDetail] = useState({
    firstname : '',
    lastname : '',
    username: '',
    email : '',
    password : '',
    confirmpassword: '',
   });
   
   const inputEvent=(event)=>{
    const value = event.target.value;
    const detail = event.target.name;
    // console.log(value);
    // console.log(detail);
    
    setDetail((preValue)=>{
        return{
            ...preValue,
            [detail]:value       
        }

    })};
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const registerEvent=(event)=>{
    // console.table(detail.firstname,detail.lastname,detail.username,detail.email,detail.password,detail.confirmpassword);
    event.preventDefault();
    dispatch(register({
      firstname: detail.firstname,
      lastname: detail.lastname,
      username: detail.username,
      email: detail.email,
      password: detail.password,
      confirmpassword: detail.confirmpassword,
    }));
  }
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="First Name" name="firstname" onChange={inputEvent} />
          <Input placeholder="Last Name" name="lastname" onChange={inputEvent}/>
          <Input placeholder="Username" name="username"onChange={inputEvent} />
          <Input placeholder="Email" name="email" type="email" onChange={inputEvent}/>
          <Input placeholder="Password" name="password" type="password" onChange={inputEvent} />
          <Input placeholder="Confirm Password" name="confirmpassword" type="password" onChange={inputEvent} />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the PRIVACY POLICY
          </Agreement>
          <Button onClick={registerEvent}>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;
export default Register;