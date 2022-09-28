import React from 'react';

const SingleItem = (props) => {
    console.log(props)
    const{age, name, picture, text, time} = props.item
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
                    <button className="btn btn-active btn-secondary">Add to List</button>


                </div>
                </div>

        </div>
    );
};

export default SingleItem;