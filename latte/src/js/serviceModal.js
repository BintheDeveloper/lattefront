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
      <span>ππ»</span>
      &nbsp;
      <span className='text-shadow-md cursor-pointer mb-1 font-bold text-md px-4 py-2 rounded-2xl bg-[#FDDC75]' onClick={openModal}>μ΄λ€ μλΉμ€μΈκ°μ?</span>
    </div>
    <CustomModal open = {modalOpen} close={closeModal} header=" νλ°°λ€μ, νκ΅λ₯Ό λΆνν΄!">
      νμμ°½μλλ€.
    </CustomModal>
  </> 
  )

}

export default ServiceModal;
