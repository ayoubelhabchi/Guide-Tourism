import React from 'react'
import Sidebar from '../components/dashboardGuides/sideBar'
import TopBar from '../components/dashboardGuides/topBar'
import {Outlet} from 'react-router-dom'

function Dashboard() {
  return (
    <>
   <div>
    <div className=' '>
      <div className='relative top-20 '><Sidebar/></div>
    <div className='relative left-[40px] -top-[700px]'><TopBar/></div>
    
     
    </div>
    <div className='relative left-[300px] -top-[650px] h-[100px] w-scren'>{<Outlet/>}</div>
   </div>
 
   
    
    </>
   
  )
}

export default Dashboard