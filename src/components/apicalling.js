import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
const apidataa = "https://jsonplaceholder.typicode.com/posts";

function Apicalling() {
    const [apidata, setApidata] = useState([]);
    const [filterdata, setFilterdata] = useState([]);

    const apicall = () => {
        // const result = await axios.get(apidataa);
        // setApidata(result.data)

        fetch(apidataa)
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                return res.json()
            })
            .then(d => { console.log(d); setApidata(d); setFilterdata(d) })
            .catch(error => console.log(error))
    }


    const HandleClick = (e) => {
        e.preventDefault()
        apicall();
    }

    const HandleFilter = (value) => {
        const filter = filterdata && filterdata.filter(items => items.title.toLowerCase().match(value))
        return setApidata(filter);;;;;;
    }


    return (
        <>
            <div>
                <input type='search' placeholder='search' onChange={(e) => HandleFilter(e.target.value.toLowerCase())} />
            </div>

            <button onClick={HandleClick}>Click me</button>
            <ul style={{marginLeft:"1.5rem"}}>
                {

                    apidata && apidata.map((item, index) => {
                        return (
                            <li style={{ listStyleType: "circle" }} key={index + 1}>{item.title}</li>
                        )
                    })
                }
            </ul>


        </>
    )
}

export default Apicalling