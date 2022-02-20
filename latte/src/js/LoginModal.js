import React, { useState, useRef, useEffect } from 'react';
import CustomModal from './customModal';
import axios from 'axios';

function LoginModal() {
  const [modalOpen, setModalOpen] = useState(false);
  const [error, setError] = useState(null);
  const [token, setToken] = useState(null);

  const openModal = () => {
    setModalOpen(true);
  ;}
  const closeModal = () => {
    setModalOpen(false);
  };

  const [inputs, setInputs] = useState({
    username: '',
    password: ''
  })

  const {username, password} = inputs

  const onChange = (e) => {
    const {name, value} = e.target

    const nextInputs = {
      ...inputs,
      [name] : value
    }
    setInputs(nextInputs)
    console.log(inputs)
  }
  

  const onSubmit = async () => {
    console.log('확인')
    console.log(inputs['username'], inputs['password'])
      try 
      {
        const response = await axios.post('https://site1.public.nqo.me/accounts/login',{
          username: inputs['username'],
          password: inputs['password']})
        //window.localStorage.setItem('Token',response.data['User']['Token'])
        //window.localStorage.setItem('id',response.data['User']['id']) 
        //window.localStorage.setItem('email', response.data['User']['email'])
        // 서버 오류 해결되면 이거 주석 풀면 됩니다.
        console.log(response)
        console.log(response.data)
    }catch(e) {
      setError(e)
    }
    if (error) return <div>에러가 발생했습니다. 새로고침 하세요.</div>
    else {
      window.localStorage.setItem('username', username);
      window.localStorage.setItem('password', password);
      window.location.href = '/';
    }
  }
  

  // if (loading) return <div>로딩중..</div>;
  // if (error) return <div>에러가 발생했습니다</div>;
  // if (!login) return null;

  // console.log(login)

  return (
  <>
      <span className='text-shadow-md cursor-pointer mt-1 font-bold text-md px-4 py-2 rounded-2xl bg-[#ffffff]' onClick={openModal}>로그인</span>
        <CustomModal open = {modalOpen} close={closeModal} header="로그인">
          <div className='flex flex-col'>
            <div className='w-full text-center text-md font-bold text-shadow'></div>
            <div className='flex flex-col pt-5'>
              <div className='items-center flex justify-between mb-2'>
                <span value="username" className='text-shadow-md'>아이디</span>
                <input onChange={onChange} name="username" value={username} className='bg-white appearance-none border-2 border-white rounded w-9/12 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#91A7FF]'/>
              </div>
              <div className='items-center flex justify-between mb-2'>
                <span className='text-shadow-md'>비밀번호 </span>
                <input onChange={onChange} name="password" value={password} type='password' className='bg-white appearance-none border-2 border-white rounded w-9/12 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#91A7FF]'/>
              </div>
              <div className='flex flex-row justify-evenly mt-3'>
                <button onClick={onSubmit} className='basis-2/5 text-center text-white bg-[#91A7FF] cursor-pointer font-bold rounded p-3'>입력하기</button>
                <span className='basis-2/5 text-center text-white bg-[#CFCFCF] cursor-pointer font-bold rounded p-3 font-white' onClick={closeModal}>다음에 할게요!</span>
              </div>  
            </div>
          </div>
        </CustomModal>
  </> 
  )

}

export default LoginModal;
