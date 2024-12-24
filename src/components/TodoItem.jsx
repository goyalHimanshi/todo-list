import React from 'react'
import Todoitems from './Todoitems'

export default function TodoItem({ todoItems }) {
    return (
        < div >
            {todoItems.map((item) => <Todoitems text={item.text} date={item.date} />)}



        </div>


    )
}
