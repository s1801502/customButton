import React from 'react';
import { ModalContainer, ModalContent } from './modal.styles'


const Modal = ({children, isOpened, style }) => {

    if (isOpened) {
        return (
            <ModalContainer style={style}  >
                <ModalContent>
                    {children}
                </ModalContent>
            </ModalContainer>
        )
    }

    return null
    
}

export default Modal