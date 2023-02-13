import React from 'react';
import styled from 'styled-components';
import { products } from '../data';
import Product from './Product';

const Products = () => {
  return (
    <Container>
        {products.map((item)=>(
            <Product item = {item} key = {item.id} />
        ))}   
    </Container>
  );
}
const Container = styled.div`
  padding: 10px; 
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color:  whitesmoke;
`;
export default Products;
