import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import { BrowserRouter,Routes,Route } from 'react-router-dom';
export default function Detailpage() {
    const { id } = useParams();
    const [data, setData] = useState({});
    useEffect(() => {
        fetch("https://64e2cf01bac46e480e77c54f.mockapi.io/animal/animal/" + id)
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                return setData(res);
            });
        console.log("data");
    }, [])
    return (
        <>
            <div className='row'>
                <img src={data.avatar} />
                <div className='col-5'>{data.name}</div>

            </div>
        </>
    );
}
