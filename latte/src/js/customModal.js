import React, { useState } from 'react';
import '../css/customModal.css';

function CustomModal(props) {
  const { open, close, header } = props;

  return (
  <>
    <div className={open ? 'openModal modal' : 'modal'}>
      {open ? (
        <><div onClick={close} className="w-screen h-screen bg-[#2C2C2C]/[.71] z-40 fixed inset-0">
            <section className='justify-center items-center flex overflow-x-hidden z-50 overflow-y-auto fixed inset-0 outline-none focus:outline-none'>
              <div onClick={e => e.stopPropagation()} className='shadow-md rounded-md p-2 bg-white w-120px relative my-6 mx-auto max-w-3xl'>
                <div className="p-5 h-80 shadow-md bg-[#EDF2FF] w-full h-full border-0 rounded-md relative flex flex-col w-full outline-none focus:outline-none">
                  <header className='text-3xl text-shadow'>
                    <span onClick={close} className="text-[#91A7FF]">#</span>{header}
                  </header>
                  <main>
                    {props.children}
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

export default CustomModal;
