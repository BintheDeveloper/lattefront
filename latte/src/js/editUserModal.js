import React, { useState, useCallback } from 'react';
import CustomModal from './customModal';

function EditUserModal() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  ;}
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
  <>
    <div>
      <span className='text-shadow-md cursor-pointer mt-1 font-bold text-md px-4 py-2 rounded-2xl bg-[#ffffff]' onClick={openModal}>회원정보 수정</span>
    </div>
    <CustomModal open = {modalOpen} close={closeModal} header="회원정보 수정">
      <div className='flex flex-col'>
        <div className='w-full text-center text-md font-bold text-shadow'></div>
        <div className='flex flex-col pt-5'>
          <div className='items-center flex justify-between mb-2'>
            <span className='text-shadow-md'>별명</span>
            <input className='bg-white appearance-none border-2 border-white rounded w-9/12 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#91A7FF]' defaultValue={window.localStorage.getItem('username')}/>
          </div>
          <div className='items-center flex justify-between mb-2'>
            <span className='text-shadow-md'>이메일 </span>
            <input className='bg-white appearance-none border-2 border-white rounded w-9/12 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#91A7FF]' defaultValue={window.localStorage.getItem('email')}/>
          </div>
          <div className='items-center flex justify-between mb-2'>
            <span className='text-shadow-md'>비밀번호 </span>
            <input className='bg-white appearance-none border-2 border-white rounded w-9/12 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#91A7FF]' placeholder='기본값 changeme입니다.'/>
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

export default EditUserModal;
