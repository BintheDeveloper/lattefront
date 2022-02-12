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
      <div>
        <span className='text-center'>소식을 전해드릴게요!</span>
        <div className='flex flex-col'>
          <div>
            <span>닉네임</span>
            <input placeholder="카페라떼"/>
          </div>
          <div>
            <span>이메일</span>
            <input placeholder="lattenun@naver.com"/>
          </div>
          <div>
            <span>휴대폰 번호</span>
            <input placeholder="010-0000-0000"/>
          </div>
          <div>
            <span>입력하기</span>
            <span onClick={closeModal}>다음에 할게요!</span>
          </div>  
        </div>
      </div>
    </CustomModal>
  </> 
  )

}

export default ContactModal;
