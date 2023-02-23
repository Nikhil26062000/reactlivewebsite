import React from 'react';
import Data from './Data';
import Box from './Box';

const Service = () => {
  return(
    <>
    <div className="MainBox">
      {Data.map((val,key)=>{
        return <Box
               name ={val.name} 
               imgsrc={val.photo}/>
      })}
    </div>
    </>
  )
}

export default Service;