import React from 'react'
import '../Styles/Pages.styles/Dashboard.scss'
import Goodday from '../Microcomponents/Goodday'
import Piechart from '../Microcomponents/Piechart'

const Dashboard = () => {
  return (
    <div className='Dashbord-container'>
     <div className="block1">
       <Goodday/>
     </div> 
     <div className="block2">
      <div className="pie-chart"><Piechart/></div>
      <div className="periodchart">2</div>
     </div>
     <div className="block3">
       3
     </div>
    </div>
  )
}

export default Dashboard  

