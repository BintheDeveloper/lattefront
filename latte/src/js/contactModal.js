import React, { useState } from 'react';
import '../css/contactModal.css';
import CustomModal from './customModal';

function ContactModal() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  ;}
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
  <>
    <span className='cursor-pointer' onClick={openModal}>당신은 누구인가요?</span>
    <CustomModal open = {modalOpen} close={closeModal} header="Modal heading">
      팝업창입니다.
    </CustomModal>
  </> 
  )

}

export default ContactModal;
