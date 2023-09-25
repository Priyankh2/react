import React from "react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
export default function DetailPage() {
    const { id } = useParams();
    const [data, setData] = useState({})
    const navigate=useNavigate();
    useEffect(() => {
        fetch("https://64e2cf01bac46e480e77c54f.mockapi.io/animal/animal/" + id)
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                return setData(res);
            });
    }, []);
    return (
        <>
            <div className='row'>
                <img className="col-4" src={data.avatar} />
                <div className='col-5'>{data.name}</div>
            </div>
            <div className="btn btn-info" onClick={() => {
                fetch("https://64e2cf01bac46e480e77c54f.mockapi.io/animal/animal" + "/" + id, { method: "Delete" })
                .then(()=>{navigate('/animal')});
            }
            }>Delet</div>
        </>
    );
}