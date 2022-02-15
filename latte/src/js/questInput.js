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
    <option selected>{schools.title}</option>
  )}
}

function QuestInput(props) {
  const [Selected, setSelected] = useState('');
  const {register, handleSubmit} = useForm();
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  ;}
  const closeModal = () => {
    setModalOpen(false);
  };

  const handleSelect = (e) => {
    setSelected(e.target.value);
    console.log(Selected)}

  useEffect(() => {
    if (Selected =='➕') {
      openModal()
    }
    else {closeModal()}
  }, [Selected])
  

  const onSubmit = (data) => {
    console.log(data)
    axios.post('https://site1.public.nqo.me/quests/', {
      todo_quest:data['todo_quest']
    })
  }

  return (
  <>
    <div>
      <form className='flex flex-row justify-between' onSubmit={handleSubmit(onSubmit)}>
        <select defaultValue='default' className='basis-2/12 text-center font-bold rounded-lg' onChange={handleSelect} value={Selected}>
          <option className='hidden' value='default'>학교 선택</option>
          <option className='bg-slate-300'>➕</option>
          {props.school && props.school.map(schools => (
            <Schools schools={schools}/>
          ))}
        </select>
        <input className="basis-9/12 bg-white appearance-none border-2 border-white rounded w-9/12 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#91A7FF]" type="text"  placeholder="후배님들을 위해 추천해주고 싶은 퀘스트를 작성해주세요! ex) 버들골에서 막걸리 마시기" {...register("todo_quest")}/>
        <input className="basis-0.5/12 cursor-pointer text-white font-bold bg-[#BAC8FF] p-2 rounded-lg hover:bg-[#91A7FF]" type="submit" value="작성"/>
      </form>
    </div>
    <AddschModal open = {modalOpen} close={closeModal}>안되나?</AddschModal>
  </> 
  )

}

export default QuestInput;
