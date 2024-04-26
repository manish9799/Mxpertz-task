import React from 'react'
import '../App.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  let showEdit = localStorage.getItem("editPage")

  return (
    <>
    <div className='navbar'>
        <div style={{color:'white',fontSize:'30px'}}>BrainyLingo</div>
        <ul>
          <Link to="/" style={{textDecoration:'none',color:'white'}}>Home </Link>
          <Link  style={{textDecoration:'none',color:'white'}}>LeaderBoard </Link>
          <Link  style={{textDecoration:'none',color:'white'}}>Daily Quiz </Link>
          <Link  style={{textDecoration:'none',color:'white'}}>Genre </Link>
        </ul>
        {showEdit ?
        <button className='signout-btn' >
          Sign Out
          </button>
         :
        <button className='signoutEdit-btn'>Sign Out</button>

        }
    </div>
    </>
  )
}

export default Navbar