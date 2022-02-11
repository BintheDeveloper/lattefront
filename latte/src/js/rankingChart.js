import React, {useState, useEffect} from 'react';
import '../css/rankingChart.css';
import axios from 'axios';
import Chart from 'react-apexcharts'

const RankingChart = () => {
  const options = {
    fill: {
    },
    labels: {
      style:{
        fontFamily:'Cafe24SsurroundAir'
      }
    }
    ,
    legend: {
      show:false
    },
    chart: {
      id: '라떼는 순위',
      toolbar: {
        show:false
      },
      background:'#ffffff',
    },
    xaxis: {
      max:10,
      categories: [],
      labels:{
        style: {
          fontFamily:'Cafe24SsurroundAir'
        }
      }  
    },
    yaxis: {
      categories: [],
      labels:{
        show:false,
        style: {
          fontFamily:'Cafe24SsurroundAir'
        }
      }  
    },
    plotOptions: {
      bar: {
        distributed: true,
        borderRadius: 10,
      }
    },
    tooltip: {
      shared:false,
      style: {
        fontFamily:'Cafe24SsurroundAir'
      },
      y: {
        show:false
      }
    }
  }

  const series = [{
    name: '퀘스트 수',
    data: [],
    style:{
      fontFamily:'Cafe24SsurroundAir'
    }
  }]

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

  const school_title = ranking.map((ranking) => (ranking.title))
  const school_count = ranking.map((ranking) => (ranking.quest_count))

  options['xaxis']['categories'] = school_title
  series[0]['data'] = school_count

  console.log(school_title)
  console.log(school_count)

    return (
      <div className='flex justify-center pt-6'>
        <Chart options={options} series={series} width={630} height={'auto'} type="bar"/>
      </div>
    )
  }

export default RankingChart;