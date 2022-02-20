import React, { useState, useEffect } from 'react';
import '../css/questList.css';
import axios from 'axios';
import QuestLike from './questLike';



function Quest({quest}) {
  const colors = ['#dc2626', '#65a30d', '#059669', '#0891b2', '#2563eb' , '#7c3aed', '#c026d3', '#e11d48']

  return (
    <li className='py-2'>
      <div className='flex flex-row justify-between items-center'>
        <div className='flex w-2/7 items-center justify-between'>
          <span style={{backgroundColor:colors[quest.school%8]}} className='text-white font-bold p-1.5 rounded-xl'>{quest.school_name}</span>
          &nbsp;&nbsp;&nbsp;
          <span className='text-[#666666]'>{quest.todo_quest}</span>
        </div>
        <div className='mr-2'>   
          <div className='flex items-center w-9 justify-between mr-3'>
            <QuestLike onoff={quest.like_users || []} id={quest.id} count={quest.like_count}/>
          </div>
        </div>
      </div>
    </li>
  )
}

function QuestList(props) {
  const [quests, setQuests] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hottest, setHottest] = useState(null);

  useEffect(() => {
    const fetchQuests = async () => {
      try {
        // 요청이 시작 할 때에는 error 와 users 를 초기화하고
        setError(null);
        setQuests(null);
        setHottest(null);
        // loading 상태를 true 로 바꿉니다.
        setLoading(true);
        const response1 = await axios.get('https://site1.public.nqo.me/quests/');
        const response2 = await axios.get('https://site1.public.nqo.me/web-hottest/')
        setQuests(response1.data); // 데이터는 response.data 안에 들어있습니다.
        setHottest(response2.data)
        console.log(response1.data)
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    fetchQuests();
  }, []);

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!quests) return null;

  if (props.school==="전체" || props.school===''){
  var arr1 = [...props.input.slice(0).reverse(), ...quests["Quests"]]
  var arr2 = [...hottest["HottestQuests"],...props.input.slice(0).reverse()]
  }
  else {
  var arr1 = [...props.input.slice(0).reverse(), ...quests["Quests"]].filter(quest => quest['school_name'] ===`${props.school}` )
  var arr2 = [...hottest["HottestQuests"],...props.input.slice(0).reverse()].filter(hot => hot['school_name'] ===`${props.school}` )
  }

  let arr = props.html ? arr1 : arr2

  return (
    <>
      <ul>
        {arr && arr.map((quest) => (
        <Quest quest={quest}/>))}
      </ul>
    </>
  )
}

export default QuestList;
