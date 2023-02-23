import React from 'react';

const Box = (props) =>{
    return(
        <>
        <div className="MainBox">
            <div className="divi">
            <img className="img1" src={props.imgsrc} alt="Random"/>
            <h3 className="boxh3">{props.name}</h3>
            <button className='btn2'>Enroll</button>

            </div>

        </div>
        </>
    )
}

export default Box;