import React, { useState } from 'react'
import './addmovie.css'

function Addmovie({addmovie}) {

    const [title, settitle] = useState('')
    const [desc, setdesc] = useState('')
    const [url, seturl] = useState()
    const [rating, setrating] = useState(0)
  
    const handlesubmit=(e)=>{
      e.preventDefault()
        addmovie(title,desc,url,rating)
    }

  return (
    <form    onSubmit={handlesubmit}   >
        <label>title:</label>
        <input   className='input' onChange={(e)=>settitle(e.target.value)}/>
        <label>description:</label>
        <input  className='input'  onChange={(e)=>setdesc(e.target.value)} />
        <label>url:</label>
        <input className='input' type='file'  onChange={(e)=>seturl(e.target.files[0])}  />
        <label>rating:</label>
        <input className='input'   type='number'  min={0} max={5} onChange={(e)=>setrating(e.target.value)}/>
        <button>save</button>
    </form>
  )
}

export default Addmovie