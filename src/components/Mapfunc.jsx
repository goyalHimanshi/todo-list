import React from 'react'

export default function Mapfunc() {
    let food = ['dal', 'vegitable', 'milk']


    return (
        <div>
            <h1>healthy food</h1>
            <ul>
                <li className='list-group'>
                    {food.map(items => <li key={items} className='list-group-item'>{items}</li>)}

                    {/* <li className='list-group-item'>sabji</li>
                    <li className='list-group-item'>green vegitables</li>
                    <li className='list-group-item'>milk</li>
 */}

                </li>
            </ul>


        </div>
    )
}
