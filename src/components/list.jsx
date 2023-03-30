import { React, useState, useEffect } from 'react'
import axios from 'axios';
// import data from "../Listdata.json"

function List(props) {

    const [items, setItems] = useState([]);


    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((respons) => {
                setItems(respons.data)
                console.log(respons);
            })

    })
    const fil = items.filter((el) => {
        if (props.input === '') {
            return el;
        }
        else {
            return el.name.toLowerCase().includes(props.input)
        }

    })
    // const filteredData = data.filter((el) => {

    //     if (props.input === '') {
    //         return el;
    //     }
    //     else {
    //         return el.text.toLowerCase().includes(props.input)
    //     }
    // })
    return (
        <>
            <ol>
                {fil.map((it) => {
                    {
                        items.map(item => (
                            <li key={item.id}>
                                {item.name} {item.price}
                            </li>
                        ))
                    }
                })}


            </ol>

        </>
        // <ol>
        //     {filteredData.map((item) => (
        //         <li key={item.id}>{item.text}</li>
        //     ))}
        // </ol>
    )
}

export default List