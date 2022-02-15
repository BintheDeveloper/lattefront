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
      <span className='text-shadow-md cursor-pointer mt-1 font-bold text-md px-4 py-2 rounded-2xl bg-[#EEA039]' onClick={openModal}>당신은 누구인가요?</span>
    </div>
    <CustomModal open = {modalOpen} close={closeModal} header=" 당신은 누구인가요?">
      <div className='flex flex-col'>
        <div className='w-full text-center text-md font-bold text-shadow'>소식을 전해드릴게요!</div>
        <div className='flex flex-col pt-5'>
          <div className='items-center flex justify-between mb-2'>
            <span className='text-shadow-md'>닉네임</span>
            <input className='bg-white appearance-none border-2 border-white rounded w-9/12 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#91A7FF]' placeholder="카페라떼"/>
          </div>
          <div className='items-center flex justify-between mb-2'>
            <span className='text-shadow-md'>이메일</span>
            <input className='bg-white appearance-none border-2 border-white rounded w-9/12 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#91A7FF]' placeholder="lattenun@naver.com"/>
          </div>
          <div className='items-center flex justify-between mb-2'>
            <span className='text-shadow-md'>휴대폰 번호</span>
            <input className='bg-white appearance-none border-2 border-white rounded w-9/12 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#91A7FF]' placeholder="010-0000-0000"/>
          </div>
          <div className='flex flex-row justify-evenly mt-3'>
            <span className='basis-2/5 text-center text-white bg-[#91A7FF] cursor-pointer font-bold rounded p-3'>입력하기</span>
            <span className='basis-2/5 text-center text-white bg-[#CFCFCF] cursor-pointer font-bold rounded p-3 font-white' onClick={closeModal}>다음에 할게요!</span>
          </div>  
        </div>
      </div>
    </CustomModal>
  </> 
  )

}

export default ContactModal;
