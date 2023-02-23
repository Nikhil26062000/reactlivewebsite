import React from 'react';

const Form = () => {
    return (
        <>
            <div className="formBox">
                <form>
                    <h4 className='spclh4'>Name</h4><br />
                    <input className="spcl1" type="text" name="name" placeholder="Enter your Name" />
                    
                    <br /><br/>
                    
                    <h4>Email</h4><br />
                    <input className="spcl1" type="email" name="email" placeholder="Enter your Email" />
                    
                    <br /><br/>

                    <h4>Contact Number</h4><br />
                    <input className="spcl1" type="Number" name="Number" placeholder="Enter your Number" />
                    
                    <br /><br/>

                    <h4>Message</h4><br />
                    <input className="spcl" type="text" name="msg" placeholder="Enter your Query" />

                    <br /><br />

                    <button className='btn-btn'>Click me</button>
                    



                </form>
            </div>
        </>
    )
}

export default Form;