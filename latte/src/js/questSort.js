import React, { useState, useEffect } from 'react';
import '../css/questSort.css';
import axios from 'axios';

function School({test}) {
  return (
      <option>{test.title}</option>
    )
  }
  

function QuestSort() {
  const [school, setSchool] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuests = async () => {
      try {
        // 요청이 시작 할 때에는 error 와 users 를 초기화하고
        setError(null);
        setSchool(null);
        // loading 상태를 true 로 바꿉니다.
        setLoading(true);
        const response = await axios.get('https://site1.public.nqo.me/schools/');
        setSchool(response.data); // 데이터는 response.data 안에 들어있습니다.
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    fetchQuests();
  }, []);

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!school) return null;

  return (
  <>
    <option>전체</option>
    {school && school.map(schools => (
            <School test={schools}/>
          ))}
  </> 
  )

}

export default QuestSort;
