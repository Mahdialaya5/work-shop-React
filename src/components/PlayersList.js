import React from 'react'
import data from '../player'
import Player from './Player'

function PlayersList() {

   const style={"display":"flex","justifyContent":"space-around"}
   
  return (
    <div  style={style}  >

{data.map((el,index)=> 
<Player   obj={el}   key={index}  name={el.name} >nesrine</Player> )}
 

    
    </div>

  )
}

export default PlayersList