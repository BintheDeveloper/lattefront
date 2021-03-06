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
      <span>ππ»</span>
      &nbsp;
      <span className='text-shadow-md cursor-pointer mt-1 font-bold text-md px-4 py-2 rounded-2xl bg-[#EEA039]' onClick={openModal}>λΉμ μ λκ΅¬μΈκ°μ?</span>
    </div>
    <CustomModal open = {modalOpen} close={closeModal} header=" λΉμ μ λκ΅¬μΈκ°μ?">
      <div className='flex flex-col'>
        <div className='w-full text-center text-md font-bold text-shadow'>μμμ μ ν΄λλ¦΄κ²μ!</div>
        <div className='flex flex-col pt-5'>
          <div className='items-center flex justify-between mb-2'>
            <span className='text-shadow-md'>λλ€μ</span>
            <input className='bg-white appearance-none border-2 border-white rounded w-9/12 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#91A7FF]' placeholder="μΉ΄νλΌλΌ"/>
          </div>
          <div className='items-center flex justify-between mb-2'>
            <span className='text-shadow-md'>μ΄λ©μΌ</span>
            <input className='bg-white appearance-none border-2 border-white rounded w-9/12 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#91A7FF]' placeholder="lattenun@naver.com"/>
          </div>
          <div className='items-center flex justify-between mb-2'>
            <span className='text-shadow-md'>ν΄λν° λ²νΈ</span>
            <input className='bg-white appearance-none border-2 border-white rounded w-9/12 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#91A7FF]' placeholder="010-0000-0000"/>
          </div>
          <div className='flex flex-row justify-evenly mt-3'>
            <span className='basis-2/5 text-center text-white bg-[#91A7FF] cursor-pointer font-bold rounded p-3'>μλ ₯νκΈ°</span>
            <span className='basis-2/5 text-center text-white bg-[#CFCFCF] cursor-pointer font-bold rounded p-3 font-white' onClick={closeModal}>λ€μμ ν κ²μ!</span>
          </div>  
        </div>
      </div>
    </CustomModal>
  </> 
  )

}

export default ContactModal;
