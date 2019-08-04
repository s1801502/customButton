import styled from 'styled-components'

export const ButtonContainer = styled.div`
    width: 150px;
    position: relative;
`

export const Btn = styled.button`
    background-color: ${props => props.bgColor || 'black'};
    color: ${props => props.color || 'white'};
    border: none;
    width: 100%;
    height: 40px;
    outline: none;
    box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.75);
    font-family: ${props => props.font || 'courier new'};

    &:hover {
        background: ${props => props.bgHover || 'white'};
        color: ${props => props.colorHover || 'black'};
        border: 1px solid ${props => props.borderColor || 'black'};
    }

    &:active {
        box-shadow: 3px 3px 5px 0px rgba(0,0,0,0.75);
        transform: translateY(2px);
        
    }
`