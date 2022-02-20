import React, { useState, useEffect, cloneElement } from 'react';
import { useForm } from 'react-hook-form';
import '../css/questInput.css';
import axios from 'axios';
import AddschModal from './addschModal';

// 아래는 Input에서 학교 드롭박스를 불러오는 함수
function Schools({schools}) {
  if (schools.id===1) return null
  else {
  return (
    <option value={[schools.id, schools.title]}>{schools.title}</option>
  )}
}

function QuestInput(props) {
  const {register, handleSubmit} = useForm();
  const [modalOpen, setModalOpen] = useState(false);
  const [value, setValue] = useState('');
  // const [input, setInput] = useState([]); 이런 형태로 되어 있음

  const openModal = () => {
    setModalOpen(true);
  ;}
  const closeModal = () => {
    setModalOpen(false);
  };


  useEffect(()=>{
    if (value==='➕')
    openModal()
  },[value])

  const handleSelect = (e) => {
    setValue(e.target.value);
    console.log(value)
  }
    
  const onSubmit = (data) => {
    console.log(value)
    if (value !== '➕' && value !== '')
      if (window.localStorage.getItem('Token')) {
      axios.post('https://site1.public.nqo.me/quests/', {
        todo_quest:data['todo_quest'],
        school : value.split(',')[0],
        author : Number(window.localStorage.getItem('id'))
      })
      const plus = {
        todo_quest:data['todo_quest'],
        school_name : value.split(',')[1],
        author : Number(window.localStorage.getItem('id')),
        like_count : 0,
        id: 0,
        school:value.split(',')[0]
      }
      props.setInput(props.input.concat(plus))
  } else {console.log('로그인이 필요합니다.')}
  }


  return (
  <>
    <div>
      <form className='flex flex-row justify-between' onSubmit={handleSubmit(onSubmit)}>
        <select className='basis-2/12 text-center font-bold rounded-lg' onChange={handleSelect} defaultValue='this' value={value}>
          <option className='hidden' value='this'>학교 선택</option>
          <option className='bg-slate-300'>➕</option>
          {props.school && props.school.map(schools => (
            <Schools schools={schools}/>
          ))}
        </select>
        <input className="basis-8/12 bg-white appearance-none border-2 border-white rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#91A7FF]" type="text"  placeholder="후배님들을 위한 추천 퀘스트를 작성해주세요! ex) 버들골에서 막걸리 마시기" {...register("todo_quest")}/>
        <input className="basis-1/12 cursor-pointer text-white font-bold bg-[#BAC8FF] p-2 rounded-lg hover:bg-[#91A7FF]" type="submit" value="작성"/>
      </form>
    </div>
    <AddschModal open = {modalOpen} close={closeModal}/>
  </> 
  )

}

export default QuestInput;
