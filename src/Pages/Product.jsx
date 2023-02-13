import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcements from "../Components/Announcements";
import Navbar from "../Components/Navbar";
import Newsletter from "../Components/Newsletter";
import Footer from "../Components/Footer";
import { useState } from "react";
import { mobile } from "../responsive";


const Product = () => {
  const[count,setCount]=useState(0);
  const increment=()=>{
    setCount(count+1);
  }
  const decrement=()=>{
    if(count<=0){
        setCount(0);
    }
    else{
        setCount(count-1);
    }
  }
  return (
    <Container>
      <Announcements />
      <Navbar />
      <Wrapper>
        <Container2>
        <ImgContainer>
          <Image src="https://www.pngarts.com/files/3/Women-Jacket-PNG-High-Quality-Image.png" />
        </ImgContainer>
        <InfoContainer>
          <Title>Beige Overcoat</Title>
          <Desc>
          Ideal for winter-wear. Long design. Straight design. Classic collar. Long sleeve. Loops. Two side pockets. Two patch pockets on the back. Zip fastening on the front section.
          </Desc>
          <Price>₹2,000</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <button onClick={decrement}>-</button>              
              <Amount>{count}</Amount>
              <button onClick={increment}>+</button>
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
        </Container2>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};
const Container = styled.div``;

const Wrapper = styled.div`
  padding-left: 5px;
  padding-top: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection:"column" })}
`;
const Container2 = styled.div`
  display: flex;
  background-color: whitesmoke;
`;
const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding-left: 50px;
  padding-top: 20px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  margin-left: 10px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover{
      background-color: #f8f4f4;
  }
`;

export default Product;