import React, { useState } from 'react'
import Cards from "./Components/Cards"
import Form from "./Components/Form"


const App = () => {
 const [user, setuser] = useState([])
 const submithandlersdata =(data)=>{
  return setuser([...user, data])
 }
 const handleremove =(id)=>{
  return setuser(user.filter((item,index)=>index !==id))
 }
  return (
    <div className='w-full h-screen bg-zinc-400  flex items-center justify-center'>
      <div className='container mx-auto'>
        <Cards  user={user} handleremove={handleremove} />
        <Form  submithandlersdata={submithandlersdata}/>
      </div>
    </div>
  )
}

export default App