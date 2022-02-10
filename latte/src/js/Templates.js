import React, { useState } from 'react'
import '../css/Templates.css'
import RankingChart from './rankingChart'
import QuestList from './questList';
import QuestInput from './questInput';
import ServiceModal from './serviceModal';
import ContactModal from './contactModal';
import QuestSort from './questSort';
import Login from './Login';

function Templates() {
  const [Selected, setSelected] = useState("");
  const [sort, setSort] = useState('web-hottest')
  const [sorting, setSorting] = useState(false)

  
  const handleSelect = (e) => {
    setSelected(e.target.value);
  }
  const sortNew = () => {
    setSort('quests');
    setSorting(true);
  }
  const sortHot = () => {
    setSort('web-hottest');
    setSorting(false);
  }

  return (
    <>
      <div className='text-xs flex flex-col container mx-auto w-3/5 h-1/3 p-10 m-10 rounded-lg;'>
        <div className='flex justify-between items-center py-4'>
          <label className='text-3xl'># 후배들아, 학교를 부탁해!</label>
          <div className='flex flex-col'>
            <ServiceModal/>
            <ContactModal/>
          </div>
        </div>
        {/* <Login/> */}
        <div className='px-10 py-5 bg-[#EDF2FF] rounded-lg'>
          <div>
            <label className='text-2xl my-2'>Ranking | 퀘스트 랭킹</label>
            <div>
              <RankingChart/>
            </div>
          </div>
          <div>
            <div className='flex flex-col py-5'>
              <label className='text-2xl my-2'>Add Quest | 퀘스트 추가하기</label>
              <div className='text-md'>아 이건 못 참지! 후배님들을 위한 우리 학교 특! 퀘스트를 등록해주세요 :)</div>
            </div>
            <div className='flex flex-col bg-white p-3 rounded-lg'>
              <div className='p-2 flex flex-row rounded-lg'>
                  <select className='font-bold text-base text-center font-bold' onChange={handleSelect} value={Selected}>
                    <QuestSort/>
                  </select>
                  <div className='flex w-full y-full justify-center'>
                    <button className='text-base border-transparent border-b-4 hover:border-black hover:border-b-4 hover:font-bold' onClick={sortNew}>최신</button>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <button className='text-base border-transparent border-b-4 hover:border-black hover:border-b-4 hover:font-bold' onClick={sortHot}>인기</button>
                  </div>
              </div>
              <div className='bg-[#EDF2FF] p-2 rounded-lg'>
                <QuestInput/>
              </div>
              <div className='p-2'>
                <QuestList school={Selected} getlink={sort} html={sorting}/>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </>
  );
}

export default Templates;
