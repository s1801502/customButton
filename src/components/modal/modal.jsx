import React from 'react';
import Modal from 'react-modal'


const ModalWindow = ({ isOpened, closeModal }) => {

    const styles = {
        content : {
            top                   : '50%',
            left                  : '50%',
            right                 : 'auto',
            bottom                : 'auto',
            marginRight           : '-50%',
            transform             : 'translate(-50%, -50%)'
          }
    }
 
    return (
        <Modal
                isOpen={isOpened}
                onRequestClose={closeModal}
                style={styles}
                contentLabel="Example Modal"
                ariaHideApp={false}
            >
    
                <h2>Fuck this shit</h2>
                
        </Modal>
)}

export default ModalWindow