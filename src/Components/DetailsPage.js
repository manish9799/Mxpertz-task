import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { checkStatus } from '../App';

const DetailsPage = () => {
  const params = useParams()
  const [editData, setEditdata] = useState([])
  useEffect(() => {
    let val = JSON.parse(localStorage.getItem('editdata'))
    setEditdata(val)
  }, [params])

  return (
    <>
      <div className='hero-section'>
        <h1 style={{ color: 'white' }}>The Lost City Of Future Earth</h1>
        <div className='btn-group'>
          <button className='menu-btn' style={{ backgroundColor: checkStatus("New") }}>World Explorer</button>
          <button className='menu-btn' style={{ backgroundColor: checkStatus("") }}>Story Adventure</button>
          <button className='menu-btn' style={{ backgroundColor: checkStatus("") }}>Brain Quest</button>
        </div>

      </div>

      <p style={{ textAlign: 'center', color: 'white' }}>Drag Pictures to the matching Words, light up correct pairs, shake for a retry</p>

      <div style={{ padding: '40px', display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ border: '1px dashed white', width: '30%', borderRadius: '10px', padding: '10px' }}>
          <span style={{ fontSize: '25px', color: 'white' }}>Correction</span><sup style={{ fontSize: '15px', color: 'white', marginLeft: '10px', }} >{`(Noun)`}</sup>
          <span style={{ display: 'block', fontSize: '12px', color: 'white', marginBottom: '10px' }}>Lorem Ispansum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</span>
          <img src={`https://ik.imagekit.io/dev24/${editData?.Image}`} className='editCard-img' alt='No Image' style={{ objectFit: 'contain' }} />
        </div>
          <div className='cardDetail-item' >

            <img src={`https://ik.imagekit.io/dev24/${editData?.Image}`}  alt='No Image' className='detail-data' />
            <div style={{padding:'10px'}}>
          <span style={{ display: 'block', fontSize: '20px', color: 'white', marginBottom: '10px' }}>Lorem Ispansum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.Lorem Ispansum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.Lorem Ispansum is simply dummy text of the printing and typesetting industry.</span>

              <p className='card-name'>{editData?.Title || '-'}</p>
              <button className='card-btn' style={{ color: checkStatus(editData?.Status) }}>
                {editData?.Status || '-'}
              </button>
            </div>
          </div>
      </div>
    </>
  )
}

export default DetailsPage