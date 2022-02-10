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

function QuestInput() {
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
    if (Selected =='+') {openModal()}
    else {closeModal()}
  }, [Selected])
  

  const onSubmit = (data) => {
    console.log(data)
  }

  const [schools, setSchools] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuests = async () => {
      try {
        // 요청이 시작 할 때에는 error 와 users 를 초기화하고
        setError(null);
        setSchools(null);
        // loading 상태를 true 로 바꿉니다.
        setLoading(true);
        const response = await axios.get('https://site1.public.nqo.me/schools/');
        setSchools(response.data); // 데이터는 response.data 안에 들어있습니다.
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    fetchQuests();
  }, []);

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!schools) return null;

  return (
  <>
    <div>
      <form className='flex flex-row justify-evenly' onSubmit={handleSubmit(onSubmit)}>
        <select className='text-center font-bold rounded-lg' onChange={handleSelect} value={Selected}>
          <option>+</option>
          {schools && schools.map(schools => (
            <Schools schools={schools}/>
          ))}
        </select>
        <input className="bg-white appearance-none border-2 border-white rounded w-10/12 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#91A7FF]" type="text"  placeholder="후배님들을 위해 추천해주고 싶은 퀘스트를 작성해주세요! ex) 버들골에서 막걸리 마시기" {...register("todo_quest")}/>
        <input className="cursor-pointer text-white font-bold bg-[#BAC8FF] p-2 rounded-lg hover:bg-[#91A7FF]" type="submit" value="작성"/>
      </form>
    </div>
    <AddschModal open = {modalOpen} close={closeModal} header="Modal heading">안되나?</AddschModal>
  </> 
  )

}

export default QuestInput;
