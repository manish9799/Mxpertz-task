import React, { useEffect, useState } from 'react'
import '../App.css';
import { checkStatus } from '../App';
import CardLists from './CardLists';
import axios from 'axios';

const HeroSection = () => {
  const [filter, setFilter] = useState('')
  const [dataList, setDataList] = useState([])
  const [filterList, setFilterList] = useState([])

  const GetData = async () => {
    try {
      const response = await axios.get(`https://child.onrender.com/api/sciencefiction`);
      setDataList(response?.data)
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    GetData()
  }, [])

  const filterby = (data) => {
    setFilter(data)
  }

  useEffect(()=>{
    if(filter?.length){
      let filterData = dataList.filter((item,i)=> item?.Status == filter)
      setFilterList(filterData)
    }else{
      setFilterList(dataList)
    }

  },[filter,dataList])
  return (
    <>
      <div className='hero-section'>
        <h1 style={{ color: 'white' }}>Science Fiction Stories</h1>
        <div className='btn-group'>
          <button className='menu-btn' style={{ backgroundColor: checkStatus("New") }} onClick={() => filterby('New')}>New</button>
          <button className='menu-btn' style={{ backgroundColor: checkStatus("In Progress") }} onClick={() => filterby('In Progress')}>In Progress</button>
          <button className='menu-btn' style={{ backgroundColor: checkStatus("Completed") }} onClick={() => filterby('Completed')}>Completed</button>
          <button className='menu-btn' style={{ backgroundColor: checkStatus("New") }} onClick={() => filterby('')}>Clear All</button>
        </div>
      </div>
      <CardLists dataList={filterList} />
    </>
  )
}

export default HeroSection