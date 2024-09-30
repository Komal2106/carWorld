import React from 'react'
import list from "../../public/Inventory.json"
import Cards from "./Cards"
import { Link } from 'react-router-dom'

function Collection() {
    console.log(list)
  return (
    <>
        <div className="max-w-screen-4xl continer mx-auto md:px-20 px-4">
            <div className="mt-32 items-center justify-center text-center"> 
                <h1 className="text-2xl font-semibold md:text-4xl">
                    We are delighted to see you HERE! 😊 
                </h1>
                <p className="mt-12 ">
                "Welcome to our Collections page! Here you'll find a curated selection of our finest products, carefully picked to suit your needs and preferences. Browse through our diverse range and discover something special just for you. Happy exploring!"
                </p>
                <Link to="/">
                    <button className="mt-8 bg-red-400 text-white rounded-md px-4 py-1 hover:bg-red-500 duration-300">
                        Back
                    </button>
                </Link>
            </div>
            <div className="mt-14 grid grid-cols-1 md:grid-cols-4 ">
                {
                    list.map((item) => (
                        <Cards key={item.id} item={item}/>
                    ))
                }
            </div>
        </div>
    </>
  )
}

export default Collection