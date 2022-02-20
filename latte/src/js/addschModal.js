import axios from 'axios';
import React, { useState } from 'react';
import '../css/addschModal.css';

function AddschModal(props) {
  const { open, close, header } = props;

  const [input, setInput] = useState('');

  const onChange = (e) => {
    setInput(e.target.value)
    console.log(input)
  }

  const onSubmit = async() => {
    if (window.localStorage.getItem('Token')) {
    const response = await axios.post('https://site1.public.nqo.me/schools/', {
      title:input
    })
    console.log(response)
    console.log(response.data)
    window.location.href = '/';
  } else console.log('로그인이 필요합니다.')
  }


  return (
    <>
    <div className={open ? 'openModal modal' : 'modal'}>
      {open ? (
        <><div className="w-screen h-screen bg-[#2C2C2C]/[.71] z-40 fixed inset-0">
            <section className='justify-center items-center flex overflow-x-hidden z-50 overflow-y-auto fixed inset-0 outline-none focus:outline-none'>
              <div className='shadow-md rounded-md p-2 bg-white w-120px relative my-6 mx-auto max-w-3xl'>
                <div className="p-5 h-80 shadow-md bg-[#EDF2FF] w-full h-full border-0 rounded-md relative flex flex-col w-full outline-none focus:outline-none">
                  <header className='text-3xl text-shadow'>
                    <span onClick={close} className="text-[#91A7FF]">#</span>{header}
                  </header>
                  <main>
                  <div className='flex flex-col'>
                    <div>
                      <input onChange={onChange} placeholder="학교명을 입력하세요"/>
                    </div>
                    <div className='flex flex-row'>
                      <button onClick={onSubmit}>추가</button>
                      <button onClick={close}>다음에 할게요</button>
                    </div>
                  </div>
                  </main>
                </div>
              </div>
            </section>
          </div>
        </>
      ) : null}
    </div>
  </> 
  )

}

export default AddschModal;
