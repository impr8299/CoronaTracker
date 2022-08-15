import React from 'react'
import { useEffect,useState } from 'react'
import './Covid.css'

const Covid = () => {

    const [data, setdata] = useState([]);
    async function getCovidData(){
try {
      const res = await fetch('https://data.covid19india.org/data.json');
      const finalData=await res.json();
    //   console.log(finalData.statewise[0]);
    setdata(finalData.statewise[0]);
    } 
catch (error) {
    console.log(error)
}
}  

useEffect(() => {
  getCovidData();
  }, [])

  return (
    <>
  <h2> LIVE UPDATE</h2>
    <h2>COVID-19 TRACKER</h2>

    <ul>
        <li className='card'>
            <div className="card_main">
            <div className="card_inner">
                <p className="card_name">COUNTRY</p>
                <p className="card_total">INDIA </p>
            </div>
            </div>
        </li>
        <li className='card'>
            <div className="card_main">
            <div className="card_inner">
                <p className="card_name">RECOVERED</p>
                <p className="card_total">{data.recovered} </p>
            </div>
            </div>
        </li>
        <li className='card'>
            <div className="card_main">
            <div className="card_inner">
                <p className="card_name">CONFIRMED</p>
                <p className="card_total">{data.confirmed} </p>
            </div>
            </div>
        </li>
        <li className='card'>
            <div className="card_main">
            <div className="card_inner">
                <p className="card_name">DEATH</p>
                <p className="card_total">{data.deaths} </p>
            </div>
            </div>
        </li>
        <li className='card'>
            <div className="card_main">
            <div className="card_inner">
                <p className="card_name">ACTIVE</p>
                <p className="card_total">{data.active}</p>
            </div>
            </div>
        </li>
        <li className='card'>
            <div className="card_main">
            <div className="card_inner">
                <p className="card_name">UPDATED</p>
                <p className="card_total">{data.lastupdatedtime} </p>
            </div>
            </div>
        </li>
    </ul>
  </>
  )
}

export default Covid