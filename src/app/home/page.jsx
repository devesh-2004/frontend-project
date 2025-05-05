import React from 'react'

const page = () => {
  const a = [1, 2, 3, 4, 5];
  a.map((item)=>{
    console.log(item);
  })
  
  return (
    <div>{a.map((item,index)=>{
      return <p key={index}>{item}</p>
    })}</div>
  )
}

export default page
