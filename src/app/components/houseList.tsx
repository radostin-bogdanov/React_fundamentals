"use client";

import HouseRow from "./houseRow";
import { useState } from "react";
const housesArray = [
    {
        id: 1,  
        address: "123 Main St",
        country: "USA",
        price: "$100,000"
    },
    {
        id: 2,
        address: "456 Park Ave",
        country: "Canada",
        price: "$250,000"
    },
    {
        id: 3,
        address: "789 Broadway",
        country: "Australia",
        price: "$300,000"
    },
    {
        id: 4,
        address: "1010 Main St",
        country: "USA",
        price: "$400,000"
    },
    {
        id: 5,
        address: "1122 Main St",
        country: "USA",
        price: "$500,000"
    }
]

const HouseList = () => {
    const [houses, setHouses] = useState(housesArray)
    
    const addHouse = () =>{
        setHouses([...houses, {
            id: 6,
            address: "1234 Main St",
            country: "USA",
            price: "$600,000"
        }])
    }
    return (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
            <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 border-b border-gray-200 dark:border-gray-700">
                <h5 className="text-xl font-semibold text-gray-800 dark:text-white">
                    Houses currently on the market
                </h5>
            </div>
            
            <div className="p-6 overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-50 dark:bg-gray-900">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                Address
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                Country
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                Asking Price
                            </th>
                            <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                        {houses.map((house) => (
                            <HouseRow key={house.id} house={house} />
                        ))}
                    </tbody>
                </table>
                <button onClick={addHouse} className="mt-4 px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-medium rounded-lg shadow-sm transition-colors duration-200 flex items-center justify-center space-x-2">
                    <span>Add House</span>
                </button>
            </div>
        </div>
    )
}

export default HouseList;