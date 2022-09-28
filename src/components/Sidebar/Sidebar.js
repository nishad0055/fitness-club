import React from 'react';
import headshot from '../../Images/headshot.png'

const Sidebar = () => {
    return (
        <div>
            
            <div className='flex items-center'>
                  <img className='w-20 h-20 mr-2' src={headshot} alt="" />
                  <div className='text-white'>
                    <h1>Nishad Ahmed</h1>
                    <p><small>Sherpur</small></p>
                  </div>
               </div>
               <div className='flex justify-around bg-slate-600	 shadow-xl my-5 mx-2 rounded-lg p-2'>
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

        </div>
    );
};

export default Sidebar;