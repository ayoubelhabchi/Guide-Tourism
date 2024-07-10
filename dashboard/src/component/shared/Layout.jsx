import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Header from './Header'

export default function Layout() {
  return (
    <div className=" bg-white flex-row flex h-screen w-screen overflow-hidden">
        <Sidebar/>
        <div className=' flex-1'>
          <Header/>
        <div className=''>{<Outlet/>}</div>
        </div>

    </div>
  )
}
