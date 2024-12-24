import React from 'react'

export default function Todoitems({ text, date }) {

    return (
        <div>
            <div class="container ">

                <div class="row">
                    <div class="col-6 ">
                        {text}
                    </div>
                    <div class="col-4">
                        <label><b>enter the date</b>
                            {date}</label>
                    </div>

                    <div class="col-2 ">
                        <button type='button' class='btn btn-danger'>DELETE</button>
                    </div>
                </div>
            </div>

        </div>
    )
}
