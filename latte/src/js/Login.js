import React, { useState, useEffect } from 'react';
import '../css/login.css';
import axios from 'axios';

function Login() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const logout = () => {
    console.log('되냐?')
    localStorage.clear();
  }

  const signUp = () => {
    const fetchQuests = async () => {
      try {
        // 요청이 시작 할 때에는 error 와 users 를 초기화하고
        setError(null);
        // loading 상태를 true 로 바꿉니다.
        setLoading(true);
        const response = await axios.post('https://site1.public.nqo.me/accounts/create-random-id/')
        console.log(response.data)
        window.localStorage.setItem('Token', response.data['Token']);
        window.localStorage.setItem('username', response.data['User']['username'])
        window.localStorage.setItem('password', response.data['User']['password'])
        window.localStorage.setItem('email',response.data['User']['email'])
        window.localStorage.setItem('id',response.data['User']['id'])
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    fetchQuests();
  
    if (loading) console.log('로딩 중')
    if (error) console.log('에러 발생')
  
  }

  const provider = window.localStorage.getItem('Token')
    return (
    <>
    {provider ? <div onClick={logout}>로그아웃</div>:<div onClick={signUp}>회원가입</div>}
    </>
  )
}

export default Login;
