import React from 'react'

export default function Clocktime() {
    const date = new Date();
    return (
        <div>
            <p >the current time is{date.toLocaleDateString()} and the time is {date.toLocaleTimeString()}</p>

        </div>
    )
}
