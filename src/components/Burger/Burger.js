import React from 'react';
import { StyledBurger } from './Burger.styled';
import {bool , func} from 'prop-types';



const Burger = ({ open , setOpen, ...props}) => {
  const isExpanded = open ? true : false;
  
  return (
    <StyledBurger aria-label="Toggle Menu" aria-expanded={isExpanded} open={open} onClick={() => setOpen(!open)} {...props}>
      <div />
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}

Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default Burger;
