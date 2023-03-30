import React from 'react'

export default function New() {

    const handleParentClick = (event) => {
      console.log("parent event: ", event);
    }
    const handleChildClick = (event) => {
      event.stopPropagation();
      console.log("child event: ", event);
    }


  return ( 
    <div className='parent' onClick={handleParentClick}>
        <h1>Wlcome Everyone</h1>
        <button onClick={handleChildClick}>Increment +</button>
    </div>
  )
}
