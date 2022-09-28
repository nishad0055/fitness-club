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
                    <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div> 
                    <div className="badge badge-outline">Products</div>
                    </div>
                </div>
                </div>

        </div>
    );
};

export default SingleItem;