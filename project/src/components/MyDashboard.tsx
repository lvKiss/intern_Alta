import { Cards } from "./Cards"
import { Chart } from "./Chart"
import { Menubar } from "./Menubar"
import Topbar from "./Topbar"

export const MyDashboard = () => {
  return (
      <div className="back">
          <div className='bg'>
              <Topbar CurrentTitle="Dashboard" />
              <h1>Biểu đồ cấp số</h1>
              <Cards/>
              <Chart/> 
              <Menubar />
              
          </div>
      </div>
  )
}