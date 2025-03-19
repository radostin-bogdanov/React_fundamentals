const HouseRow = (props: {house: {id: number, address: string, country: string, price: string}}) => {
    return (
        <tr key={props.house.id}>
             <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                {props.house.address}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                {props.house.country}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                {props.house.price}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-500 dark:text-gray-400">
                <button className="px-4 py-2 bg-blue-600 text-center text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md">
                    View Details
                </button>
            </td>
        </tr>
    )
}

export default HouseRow;