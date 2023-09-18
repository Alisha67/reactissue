import React from 'react'
import {css, styled} from "styled-components"
export const Button=styled.button`
border-radius: 5px;
background: #db8004;
border: none;
color: white;
padding: 0.3rem 1rem;

${props=>props.$primary && css`
background-color:red;
border-color:black;
 `}

 ${props=>props.secondary && css`
background-color:green;
border-color:black;
 `}`