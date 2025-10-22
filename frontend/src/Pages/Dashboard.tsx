import React from 'react'
import '../Styles/Pages.styles/Dashboard.scss'
import Goodday from '../Microcomponents/Goodday'
import Piechart from '../Microcomponents/Piechart'
import Barchart from '../Microcomponents/Barchart'
import Recenttable from '../Microcomponents/Recenttable'

const Dashboard = () => {
  return (
    <div className='Dashbord-container'>
     <div className="block1">
       <Goodday/>
     </div> 
     <div className="block2">
      <div className="pie-chart"><Piechart/></div>
      <div className="periodchart"><Barchart/>
     </div>
     </div>
     <div className="block3">
       <Recenttable/>
     </div>
    </div>
  )
}

export default Dashboard  


