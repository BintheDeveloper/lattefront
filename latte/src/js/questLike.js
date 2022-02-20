import React, { useState, useEffect } from 'react';
import '../css/contactModal.css';
import axios from 'axios';

function QuestLike(props) {
  
  const isLiked = props.onoff.indexOf(Number(window.localStorage.getItem('id')))

  const plusLike = async () => {
    if (window.localStorage.getItem('Token')) {
        const response = await axios.post(`https://site1.public.nqo.me/${props.id}/like/`,null,{
        headers : {Authorization: `Token ${window.localStorage.getItem('Token')}`}})
      } else 
      {console.log('로그인이 필요합니다.')}
    }

  const minusLike = async () => {
    if (window.localStorage.getItem('Token')) {
      const response = await axios.post(`https://site1.public.nqo.me/${props.id}/like/`,null,{
      headers : {Authorization: `Token ${window.localStorage.getItem('Token')}`}})
    } else 
    {console.log('로그인이 필요합니다.')}
  }



  return (
  <>
    <div className='flex items-center w-9 justify-between mr-3'>
      {(isLiked===-1) ? <button className="basis=1/2" onClick={plusLike}>🤍</button>: <button className="basis=1/2" onClick={minusLike}>🧡</button>}
      <span className="text-right basis=1/2">{props.count}</span>
    </div>
  </> 
  )

}

export default QuestLike;
