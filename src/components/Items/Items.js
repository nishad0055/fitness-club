import React, { useEffect, useState } from 'react';
import SingleItem from '../SingleItem/SingleItem';

const Items = () => {
    const [items , setItems] = useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setItems(data))
    },[])

    return (
        <div className='grid grid-cols-5 gap-4'>
            <div className="col-span-4 bg-slate-300">
               <h2 className='text-4xl my-5'>UtRA-Active-club</h2>
               <div className='w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                   {
                    items.map(item => <SingleItem
                     key= {item.id}
                     item ={item}
                    ></SingleItem>)
                   }
               </div>
            </div>
            <div className=" bg-slate-900">
               <h2 className='text-white' >Summary list</h2>
            </div>
            
        </div>
    );
};

export default Items;