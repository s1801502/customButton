import styled from 'styled-components'


export const Container = styled.div`
    width: ${props => props.width + 'px' || '100%'};
    background: ${props => props.bgColor || 'white'};
    
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
`

export const Input = styled.input`
    width: 100%;
    border: none;
    font: inherit;
    border-bottom: 1px solid #bbb;
    type: ${props => props.type || 'text'};

    &:focus {
        outline: none;
    }
`

export const Label = styled.label`
    font: inherit;
    

`