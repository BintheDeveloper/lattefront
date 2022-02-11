import React, { useState, useEffect } from 'react';
import '../css/questList.css';
import axios from 'axios';
import QuestLike from './questLike';

function Quest({test}) {
return (
  <li className='py-2'>
    <div className='flex flex-row justify-between'>
      <div className='flex w-2/7 items-center justify-between'>
        <span className='bg-[#77B756] text-white font-bold p-1.5 rounded-xl'>{test.school_name}</span>
        &nbsp;&nbsp;&nbsp;
        <span className='text-[#666666]'>{test.todo_quest}</span>
      </div>
      <div>   
        <QuestLike id={test.id}/> {test.like_count} 
      </div>
    </div>
  </li>
  )
}

function Hottest({test}) {
  return (
    <li className='py-2'>
      <div className='flex flex-row justify-between items-center'>
        <div className='flex w-2/7 items-center justify-between'>
          <span className='bg-[#77B756] text-white font-bold p-1.5 rounded-xl'>{test.school_name}</span>
          &nbsp;&nbsp;&nbsp;
          <span className='text-[#666666]'>{test.todo_quest}</span>
        </div>
        <div>   
          <QuestLike id={test.id}/> {test.like_count} 
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

  if (props.school==="전체"){
  var arr1 = quests["Quests"]
  var arr2 = hottest["HottestQuests"]
  }
  else if (props.school===''){
    var arr1 = quests["Quests"]
    var arr2 = hottest["HottestQuests"]
  }
  else {
  var arr1 = quests["Quests"].filter(quest => quest['school_name'] ===`${props.school}` )
  console.log(arr1)

  var arr2 = hottest["HottestQuests"].filter(hot => hot['school_name'] ===`${props.school}` )
  console.log(arr2)}

  return (
    <>
      { props.html ? (
        <ul>
        {arr1 && arr1.map((quest) => (
          <Quest key={quest.id} test={quest}/>))}
        </ul>) : (
        <ul>
        {arr2 && arr2.map((quest) => (
          <Hottest key={quest.id} test={quest}/>
        ))}
        </ul>
      ) }
    </> 
  )
}

export default QuestList;
