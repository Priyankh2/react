
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export default function Student() {
    const [Data, setData] = useState([]);
    useEffect(() => {
        fetch("https://64e2cf01bac46e480e77c54f.mockapi.io/animal/animal")
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                return setData(res);
            })
    }, [])
    var FormatedStudent = Data.map((student) => {
        return (
            <div className="col-3 p-3">
                <div class="card">
                    <img src={student.avatar} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{student.name}</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <Link to={"/animal/" + student.id} className="btn btn-primary">DetailPage</Link>
                        <Link to="/AddStudent" className="btn btn-info">Addstudent</Link>
                    </div>
                </div>
            </div>
        );
    });
    return (
        <>
            <div className="row">
                {FormatedStudent}
            </div>
        </>
    );
}