import React from 'react';
import { ButtonContainer, Btn } from './Button.styles'




const Button = ({children, handleClick, ...otherProps}) => (
    <ButtonContainer>
        <Btn onClick={handleClick} {...otherProps} >{children}</Btn>
    </ButtonContainer>
)

export default Button