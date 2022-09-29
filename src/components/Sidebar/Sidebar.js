import React, { useState } from 'react';
import headshot from '../../Images/headshot.png'

const Sidebar = () => {
    const [time, setTime] = useState(0)

    function handleClick(time) {
       setTime(time);
     }
    return (
        <div>
            
            <div className='flex items-center'>
                    <img className='w-20 h-20 mr-2' src={headshot} alt="" />
                    <div className='text-white'>
                        <h1>Nishad Ahmed</h1>
                        <p><small>Sherpur</small></p>
                    </div>
               </div>
               <div className='flex justify-around bg-base shadow-xl my-5 mx-2 rounded-lg p-2'>
                    <div className='info'>
                    <p>75<span>kg</span></p>
                    <p>Weight</p>
                    </div>
                    <div className='info'>
                    <p>5.6<span>ft/in</span></p>
                    <p>Height</p>
                    </div>
                    <div className='info'>
                    <p>25<span>yrs</span></p>
                    <p>Age</p>
                    </div>
               </div>
               <h1 className='mt-8 text-white text-2xl font-bold text-center'>Add A Break</h1>
               <hr className='mx-10' />
              <div className='my-5'>
                    <button onClick ={()=>handleClick('20s') } className="btn btn-sm mr-2">20s</button>
                    <button onClick ={()=>handleClick('30s') }  className="btn btn-sm mr-2">30s</button>
                    <button onClick ={()=>handleClick('40s') } className="btn btn-sm mr-2">40s</button>
                    <button onClick ={()=>handleClick('50s') } className="btn btn-sm">50s</button>
              </div>
              <div>
                <div className='flex justify-around bg-base shadow-xl my-5 mx-2 rounded-lg p-2 text-white'>
                    <p>Excercise Time: </p>
                    <p >0000S</p>
                </div>
                <div className='flex justify-around bg-base shadow-xl my-5 mx-2 rounded-lg p-2 text-white'>
                    <p>Break Time:</p>
                     <p>{time} </p>
                </div>
                    
               </div>
               <button className="btn btn-secondary my-5 mx-10">Activity Completed</button>
        </div>
    );
};

export default Sidebar;