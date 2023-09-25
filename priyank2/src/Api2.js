import React from 'react';
import { useState, useEffect} from 'react';
import {Link, useNavigate, useParams} from 'react-router-dom';
export default function Api2() {
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    const {id} = useParams();
    useEffect(() => {
        fetch("https://64e2cf01bac46e480e77c54f.mockapi.io/animal/animal")
            .then((res) => {
                return (res.json());
            })
            .then((res) => {
                setData(res);
            })
    }, []);
    var FormatedAnimal2 = data.map((hellow) => {
        return (
            <div className="col-3 p-3">
                <div class="card">
                    <img src={hellow.avatar} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{hellow.name}</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        {/* <a href={hellow.avatar} class="btn btn-primary">DetailPage</a> */}
                        <Link to={"/animal/"+hellow.id} className='btn btn-info'>DetailPage</Link>
                        <button onClick={()=>{
                            fetch("https://64e2cf01bac46e480e77c54f.mockapi.io/animal/animal"+"/"+hellow.id,{method : "Delete"})
                            .then((res)=>{
                                navigate('/Api2');
                            })
                            // setData([
                            //     ...data.filter((e)=>{
                            //         return(e.id!==hellow.id);
                            //     })
                            // ])
                        }} class="btn btn-primary">Delet</button>
                    </div>
                </div>
            </div>
        );
    });
    return (
        <>
            <div className='row'>
                {FormatedAnimal2}
            </div>
        </>
    );
}