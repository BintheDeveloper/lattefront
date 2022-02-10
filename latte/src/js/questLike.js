import React, { useState, useEffect } from 'react';
import '../css/contactModal.css';
import axios from 'axios';

function QuestLike(props) {

  const plusLike = () => {
    console.log('하이')
  }
  return (
  <>
    <button onClick={plusLike}>🧡</button>
  </> 
  )

}

export default QuestLike;
