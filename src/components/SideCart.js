import React from 'react';
import {ProductConsumer} from '../context';
import styled from '';

export default function SideCart() {
  return (
    <ProductConsumer>
    {
      value => {
        const {cartOpen, closeCart, card} = value;

        <CartWrapper>
          
        </CartWrapper>
      }
    }
    
    </ProductConsumer>
  )
}
