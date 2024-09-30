import React from 'react';

function Cards({ item }) {
  return ( 
    <>
      <div className="cards-container mt-4 flex flex-wrap justify-center gap-3 md:gap-6 p-3 hover:scale-105 duration-300  hover:cursor-pointer">
        <div className="card bg-base-100 w-80 shadow-xl dark:bg-slate-700 dark:text-white">
          <figure>
            <img src={item.image} alt={item.name} className="h-48 w-full object-cover" />
          </figure>
          <div className="card-body">
            <h2 className="card-title flex items-center justify-between">
              {item.name}
              <div className="badge badge-secondary bg-red-400 border-none">NEW</div>
            </h2>
            <p>{item.description}</p>
            <div className="card-actions justify-end">
              <div className="badge  px-3 py-3 bg-red-400 text-white hover:bg-red-500 hover:text-white hover:cursor-pointer duration-200 ">${item.price}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;