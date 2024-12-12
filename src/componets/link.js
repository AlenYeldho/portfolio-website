import React from 'react'
import "./link.scss"
export default function Link() {
    const items =[ "Home","Service","Portfolio","Contact","About"];
  return (
    <div className='link' >
       {items.map(item=>(
        < a href={`#${item}`} key={item}>{item}</a>
       ))}
    </div>
  )
}
