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
    <div className='flex items-center'>
      <span>👉🏻</span>
      &nbsp;
      <span className='cursor-pointer mb-1 font-bold text-md px-4 py-2 rounded-2xl bg-[#FDDC75]' onClick={openModal}>어떤 서비스인가요?</span>
    </div>
    <CustomModal open = {modalOpen} close={closeModal} header="Modal heading">
      팝업창입니다.
    </CustomModal>
  </> 
  )

}

export default ServiceModal;
