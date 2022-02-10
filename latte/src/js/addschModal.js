import React, { useState } from 'react';
import '../css/addschModal.css';

function AddschModal(props) {
  const { open, close, header } = props;

  return (
  <>
    <div className={open ? 'openModal modal' : 'modal'}>
      {open ? (
        <section>
          <header>
            {header}
            <button className="close" onClick={close}>
              {' '}
              &times;{' '}
            </button>
          </header>
          <main>{props.children}</main>
          <footer>
            <button className="close" onClick={close}>
              {' '}
              close{' '}
            </button>
          </footer>
        </section>
      ) : null}
    </div>
  </> 
  )

}

export default AddschModal;
