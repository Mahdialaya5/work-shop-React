import axios from 'axios'
import React, { useEffect, useState } from 'react'


function UserlList() {
 
  const [data, setdata] = useState([])
  const [error, seterror] = useState()

 /* const  getdata=async()=> {
    try {
        
      const  res= await axios.get('https://jsonplaceholder.typicode.com/users')
     setdata(res.data)
    } 
    catch (err) {
        seterror(err);
    }
}*/


useEffect(() => {
 axios.get('https://jsonplaceholder.typicode.com/users')
 .then((res)=>setdata(res.data)).catch((err)=>seterror(err))

}, [])


  return (
    <ul>
    {data.map((el)=> <li>name:{el.name},    email:{el.email},    phone:{el.phone}</li>)}
    </ul>
  )
}

export default UserlList