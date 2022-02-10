import React, {useState, useEffect} from 'react';
import '../css/rankingChart.css';
import { Chart as ChartJS } from 'chart.js/auto';
import { Chart } from 'react-chartjs-2';
import axios from 'axios';

const RankingChart = () => {
  const [ranking, setRanking] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuests = async () => {
      try {
        // 요청이 시작 할 때에는 error 와 users 를 초기화하고
        setError(null);
        setRanking(null);
        // loading 상태를 true 로 바꿉니다.
        setLoading(true);
        const response = await axios.get('https://site1.public.nqo.me/hot-school-list/');
        setRanking(response.data); // 데이터는 response.data 안에 들어있습니다.
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    fetchQuests();
  }, []);

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!ranking) return null;

  console.log(ranking)

  const school_title = ranking.map((ranking) => (ranking.title))
  const school_count = ranking.map((ranking) => (ranking.quest_count))

  const data = {
    labels:[],
    datasets: [
      {
      type:'bar',
      borderColor:'black',
      borderWidth:1,
      data:[],
      }]
  }

  const options = {
    responsive: false,
  };

  data.labels=school_title
  data.datasets[0].data = school_count

  return (
    <div>
      <Chart options={options} className='w-2/3' type="bar" data={data}/>
    </div>
  )
}

export default RankingChart;
