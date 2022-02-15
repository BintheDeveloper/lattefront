import React, { useState, useEffect } from 'react';
import '../css/contactModal.css';
import axios from 'axios';

function QuestLike(props) {
  const [count, setCount] = useState(props.count)

  const plusLike = () => {
    setCount(props.count+1)
  }
  const minusLike = () => {
    setCount(count-1)
  }

  return (
  <>
    <div className='flex items-center w-9 justify-between mr-3'>
      {(count == props.count) ? <button className="basis=1/2" onClick={plusLike}>🤍</button>: <button className="basis=1/2" onClick={minusLike}>🧡</button>}
      <span className="text-right basis=1/2">{count}</span>
    </div>
  </> 
  )

}

export default QuestLike;
