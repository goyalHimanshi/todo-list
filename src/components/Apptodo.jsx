import React from 'react'

export default function Apptodo() {
    return (
        <div>
            <div class="container"></div>
            <div class="row">
                <div class="col-6">
                    <input type="text" placeholder="enter todo " />
                </div>
                <div class="col-4">
                    <label><b>enter the date</b>
                        <input type='date'></input></label>
                </div>
                <div class="col-2">
                    <button type='button' class="btn btn-success kg-button">ADD</button>
                </div>
            </div>
            <div class='clock-container'
            >

            </div>

        </div>


    )
}
