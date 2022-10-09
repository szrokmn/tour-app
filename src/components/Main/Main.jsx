import React from 'react'
import {data} from '../../assests/data'
import Card from './Card'
import "./Main.css"


const Main = () => {
    // console.log(data);    
  return (
    <div className='card-container'>
        
      {data.map((item) => <Card {...item}/>)}
    </div>
  )
}
export default Main
