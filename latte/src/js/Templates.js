import React, { useState, useEffect } from 'react'
import axios from 'axios';
import '../css/Templates.css'
import RankingChart from './rankingChart'
import QuestList from './questList';
import QuestInput from './questInput';
import ServiceModal from './serviceModal';
import ContactModal from './contactModal';
import Login from './Login';

function School({test}) {
  return (
      <option>{test.title}</option>
  )
}

function Templates() {
  const [Selected, setSelected] = useState("");
  const [sort, setSort] = useState('web-hottest')
  const [sorting, setSorting] = useState(false)
  const [school, setSchool] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [input, setInput] = useState(null)
  
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
      {/* <nav>
        <Login/>
      </nav> */}
      <div className='text-xs flex flex-col container mx-auto w-3/5 h-1/3 px-10 pt-0 pb-10 m-10 rounded-lg;'>
        <div className='flex justify-between items-center py-4'>
          <label className='text-3xl text-shadow'><span className="text-[#91A7FF]">#</span> 후배들아, 학교를 부탁해!</label>
          <div className='flex flex-col justify-between mr-24'>
            <ServiceModal/>
            <ContactModal/>
          </div>
        </div>
        <div>
        </div>
        <div className='bg-[#ffffff] rounded-lg p-3'>
          <div className='px-10 py-5 bg-[#EDF2FF] rounded-lg'>
            <div>
              <div className='flex flex-row justify-between -mb-20'>
                <label className='text-2xl my-2 text-shadow'>Ranking | 퀘스트 랭킹</label>
                <div onClick className='cursor-pointer relative -top-16 -right-24 bg-banner w-32 h-32 bg-cover'>
                  <div className='flex flex-col relative top-2 -left-2'>
                    <div className='text-shadow-md text-center text-lg font-[KOTRAHOPE]'>앱에서</div><div className='text-shadow-md text-lg text-center font-[KOTRAHOPE]'>만나보기</div>
                  </div>
                </div>
              </div>
              <div className='x-full'>
                <RankingChart/>
              </div>
            </div>
            <div>
              <div className='flex flex-col py-5'>
                <label className='text-2xl my-2 text-shadow'>Add Quest | 퀘스트 추가하기</label>
                <div className='text-md bg-white rounded-lg p-1 w-fit'>아 이건 못 참지! 후배님들을 위한 우리 학교 특! 퀘스트를 등록해주세요 :)</div>
              </div>
              <div className='flex flex-col bg-white p-3 rounded-lg'>
                <div className='p-2 flex justify-evenly flex-row rounded-lg'>
                    <select className='basis-2/12 text-center font-bold rounded-lg' onChange={handleSelect} value={Selected}>
                    <option>전체</option>
                      {school && school.map(schools => (
                              <School test={schools}/>
                            ))}
                    </select>
                    <div className='flex basis-10/12 y-full justify-evenly'>
                      <div className='basis-1/4'></div>
                      <>
                        <button className='text-base border-transparent border-b-4 hover:border-black hover:border-b-4 hover:font-bold' onClick={sortNew}>최신</button>
                      </>
                      <>
                        <button className='text-base border-transparent border-b-4 hover:border-black hover:border-b-4 hover:font-bold' onClick={sortHot}>인기</button>
                      </>
                      <div className='basis-1/4'></div>
                    </div>
                </div>
                <div className='bg-[#EDF2FF] p-2 rounded-lg'>
                  <QuestInput school={school}/>
                </div>
                <div className='scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thin scroll-smooth overflow-y-scroll scrollbar-thumb-custom-coral scrollbar-track-gray-100 p-2 h-80'>
                  <QuestList school={Selected} getlink={sort} html={sorting}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </>
  );
}

export default Templates;
