import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';

const Common = (props) =>{
    const imgsrc = "https://images.pexels.com/photos/3617500/pexels-photo-3617500.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
    return(
        <>
        <div className="section">
            <div className="left">
                <h1 className="text1">Grow Your businesses with</h1><br />
                <h1 ><span>React Application</span></h1>
                <br></br>
                <p className="para1">We are the team of talented developers</p>
                <br />
             <NavLink  to={props.placee} className="btn" >{props.btnname}</NavLink>
            </div>

            <div className="right">
               <img className="firstImg" src={imgsrc} alt ="Random"/>
            </div>
        </div>
        </>
    )
}

export default Common;