import styled from 'styled-components'
import { lighten, darken } from 'polished'

const colors = {
    header: 'gray',
    body: lighten(0.1, 'gray'),
    footer: darken(0.1, 'gray')
}

export const ModalContainer = styled.div`
    width: 300px;
    height: 300px;
    border: 2px solid #ccc;
    box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
    border-radius: 5px;
    z-index: 999;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
`

export const ModalContent = styled.div`
    padding: 2.5%;
    height: 100%;
    width: 100%;
`

export const ModalHeader = styled.div`
    text-align: center;
    font-size: 15px;
    font-weight: bold;
    height: 10%;
    padding: 5px;
    background: ${colors.header};
    margin: 2.5%;
    box-shadow: 1px 1px 3px 0px rgba(0,0,0,0.75);
    
`

export const ModalBody = styled.div`
    padding: 5px;
    text-align: center;
    background: ${colors.body}
    box-shadow: 1px 1px 3px 0px rgba(0,0,0,0.75);
    height: 65%;
    margin: 2.5%;
`

export const ModalFooter = styled.div`
    padding: 5px;
    text-align: center;
    background: ${colors.footer}
    box-shadow: 1px 1px 3px 0px rgba(0,0,0,0.75);
    height: 15%;
    margin: 2.5%;
`