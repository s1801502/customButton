import React from 'react'
import { Container, Input, Label } from './custom-input.styles'

const CustomInput = ({label, style, ...otherProps}) => (
    <Container width="200" style={style}>
        <Label>{label}</Label>
        <Input {...otherProps} />
    </Container>

)

export default CustomInput