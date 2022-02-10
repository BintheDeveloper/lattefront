import React, { useState } from 'react';
import '../css/contactModal.css';
import CustomModal from './customModal';

function ServiceModal() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  ;}
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
  <>
    <span className='cursor-pointer' onClick={openModal}>어떤 서비스인가요?</span>
    <CustomModal open = {modalOpen} close={closeModal} header="Modal heading">
      팝업창입니다.
    </CustomModal>
  </> 
  )

}

export default ServiceModal;
