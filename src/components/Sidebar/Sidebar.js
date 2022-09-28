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
                    <button className="btn btn-sm mr-2">20s</button>
                    <button className="btn btn-sm mr-2">30s</button>
                    <button className="btn btn-sm mr-2">40s</button>
                    <button className="btn btn-sm">50s</button>
              </div>
              <div className="form-control">
                    <label className="input-group input-group-vertical">
                        <span className='text-lg text-black'>Exercise Time</span>
                        <input type="text" placeholder="2000 sec" className="input input-bordered" />
                    </label>
                    <label className="input-group input-group-vertical mt-3">
                        <span className='text-lg text-black'>Break Time</span>
                        <input type="text" placeholder="2000 sec" className="input input-bordered" />
                    </label>
               </div>
               <button className="btn btn-secondary my-5 mx-10">Activity Completed</button>
        </div>
    );
};

export default Sidebar;