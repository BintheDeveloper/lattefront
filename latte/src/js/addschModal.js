import React, { useState } from 'react';
import '../css/addschModal.css';

function AddschModal(props) {
  const { open, close, header } = props;

  return (
    <>
    <div className={open ? 'openModal modal' : 'modal'}>
      {open ? (
          <>
            <section className='justify-center items-center flex overflow-x-hidden z-50 overflow-y-auto fixed inset-0 outline-none focus:outline-none'>
              <div className='shadow-md rounded-md p-2 bg-white relative w-auto my-6 mx-auto max-w-3xl'>
                <div className="p-5 shadow-md bg-[#EDF2FF] border-0 rounded-md relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  <header className='text-3xl text-shadow'>
                    <span onClick={close} className="text-[#91A7FF]">#</span> 학교 추가하기!
                    <button className="close" onClick={close}>
                      {' '}
                      &times;{' '}
                    </button>
                  </header>
                  <main>{props.children}</main>
                  <footer>
                  </footer>
                </div>
              </div>
            </section>
            <div className="w-screen h-screen bg-[#2C2C2C]/[.71] z-40 fixed inset-0"></div>
          </>
      ) : null}
    </div>
  </>
  )

}

export default AddschModal;
