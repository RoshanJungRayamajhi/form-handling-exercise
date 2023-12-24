import React from 'react'
import Card from "./Card"

const Cards = ({user,handleremove}) => {
  return (
    <div className='w-full  max-h-96 overflow-auto  p-3 rounded-md flex gap-8 items-center justify-center flex-wrap'>
      {user.map((item,index)=>{
        return <Card key={index} id={index} item={item} handleremove={handleremove}/>
      })}
        
    </div>
  )
}

export default Cards
 

