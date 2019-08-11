import React, { createContext, useContext } from 'react';
import { createPortal } from 'react-dom'
import { ModalContainer, ModalContent, ModalHeader, ModalBody, ModalFooter } from './modal.styles'

const modalContext = createContext()

const Header = function(props) {

    return (
        <ModalHeader>
            {props.children}
        </ModalHeader>
    )
}

const Body = ({ children }) => {
    return (
        <ModalBody>
            {children}
        </ModalBody>
    )
}

const Footer = ({children}) => {
    return (
        <ModalFooter>
            {children}
        </ModalFooter>
    )
}



class Modal extends React.Component {
    static Header = Header
    static Body = Body
    static Footer = Footer

    render() {
        const { children, isOpened, style} = this.props

        if (isOpened) {
            return createPortal(
                <ModalContainer style={style} role="dialog" >
                    <ModalContent>
                        <modalContext.Provider value={{ isOpened }}>
                            {children}
                        </modalContext.Provider>
                    </ModalContent>
                </ModalContainer>,
                document.body
            )
        }
    
        return null
    }
    

}




export default Modal


