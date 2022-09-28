import React, { useEffect, useState } from 'react';
import SingleItem from '../SingleItem/SingleItem';
import logo from '../../Images/logo.png'
import headshot from '../../Images/headshot.png'

const Items = () => {
    const [items , setItems] = useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setItems(data))
    },[])

    return (
        <div className='lg:flex relative'>
            <div className="bg-slate-300 lg:w-[80%]">
                <div className='flex items-center my-7 ml-12'>
                    <img className='w-10 h-10 mr-2' src={logo} alt="" />
                <h2 className='lg:text-4xl font-bold'>The Muscle Fitness</h2>
                </div>
               <div className='w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                   {
                    items.map(item => <SingleItem
                     key= {item.id}
                     item ={item}
                    ></SingleItem>)
                   }
               </div>
            </div>
             
            
             <div className="bg-slate-900 lg:w-[20%]">
               <div className='flex items-center'>
                  <img className='w-20 h-20 mr-2' src={headshot} alt="" />
                  <div className='text-white'>
                    <h1>Nishad Ahmed</h1>
                    <p><small>Sherpur</small></p>
                  </div>
               </div>
               <div className='flex justify-around bg-slate-200'>
                  <div>
                  <p>75kg</p>
                  <p>Weight</p>
                  </div>
                  <div>
                  <p>75kg</p>
                  <p>Weight</p>
                  </div>
                  <div>
                  <p>75kg</p>
                  <p>Weight</p>
                  </div>
                  
               </div>
            
             </div>
            
        </div>
    );
};

export default Items;