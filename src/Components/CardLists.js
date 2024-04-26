import axios from 'axios';
import React, { useEffect, useState } from 'react'
import '../App.css';
import { checkStatus } from '../App';
import wave from "../svg.png"
import { useNavigate } from 'react-router-dom';

const CardLists = ({dataList}) => {
    const navigate = useNavigate()
    
    const showdetails =(item)=>{
        navigate(`/DetailsPage/${item?._id}`)
        localStorage.setItem("editPage",true)
        localStorage.setItem("editdata",JSON.stringify(item))
    }

    return (
        <>
            <div className='card-list'>
                {dataList?.length && dataList?.map((item, i) => (
                    <div className='card-item' key={item?._id} onClick={()=>showdetails(item)}>
                        <img src={`https://ik.imagekit.io/dev24/${item?.Image[0]}`} className='card-img' alt='No Image' />
                        <p className='card-name'>{item?.Title || '-'}</p>
                        <button className='card-btn' style={{ color: checkStatus(item?.Status) }}>
                            {item?.Status || '-'}
                        </button>
                    </div>
                ))}
            </div>
        </>

    )
}

export default CardLists