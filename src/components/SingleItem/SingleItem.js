import React, { useState } from 'react';

const SingleItem = (props) => {
    console.log(props)
    const{age, name, picture, text, time} = props.item
    const [buttonText, setButton] = useState('Add To List')

    return (
        <div>
            
            <div className="card w-full h-full bg-base-100 shadow-xl">
                <figure><img className='w-96 h-44' src= {picture} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title"> {name}</h2>
                    <p>{text}</p>
                    <div className="card-actions">
                    <div className="badge badge-outline">For age: {age}</div> 
                    <div className="badge badge-outline">Time: {time}</div>
                    </div>
                    <button onClick={()=> setButton ("Added")} className="btn btn-active btn-secondary">{buttonText}</button>


                </div>
                </div>

        </div>
    );
};

export default SingleItem;