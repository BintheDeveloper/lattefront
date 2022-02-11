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
    <div className='flex items-center'>
      <span>👉🏻</span>
      &nbsp;
      <span className='cursor-pointer mt-1 font-bold text-md px-4 py-2 rounded-2xl bg-[#EEA039]' onClick={openModal}>당신은 누구인가요?</span>
    </div>
    <CustomModal open = {modalOpen} close={closeModal} header="Modal heading">
      팝업창입니다.
    </CustomModal>
  </> 
  )

}

export default ContactModal;
