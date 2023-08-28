import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function Addstudent() {
    const [data, setdata] = useState({});
    const navigate = useNavigate();
    return (
        <>
            <div className="mb-3">
                <label for="formGroupExampleInput" className="form-label">Student Name</label>
                <input type="text" className="form-control" id="formGroupExampleInput" placeholder="satyam Kavar" onChange={(e) => {
                    setdata({ ...data, name: e.target.value });
                }} />
            </div>
            <div className="mb-3">
                <label for="formGroupExampleInput2" className="form-label">Student image</label>
                <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Enter image Url" onChange={(e) => {
                    setdata({ ...data, avatar: e.target.value });
                }} />
            </div>
            <div className="mb-3">
                <label for="formGroupExampleInput2" className="form-label">Student age</label>
                <input type="number" className="form-control" id="formGroupExampleInput2" placeholder="18" onChange={(e) => {
                    setdata({ ...data, age: e.target.value });
                }} />
            </div>
            <div className="mb-3">
                <label for="formGroupExampleInput2" className="form-label">Student address</label>
                <input type="text" className="form-control" id="inputAddress" placeholder="Morbi" onChange={(e) => {
                    setdata({ ...data, address: e.target.value });
                }} />
            </div>
            <div className="mb-3">
                <label for="formGroupExampleInput2" className="form-label">Student email</label>
                <input type="email" className="form-control" id="InputEmail4" placeholder="satyamKavar@gmail.com" onChange={(e) => {
                    setdata({ ...data, Email: e.target.value });
                }} />
            </div>
              <button className="btn btn-primary" onClick={()=>{
                fetch("https://64e2cf01bac46e480e77c54f.mockapi.io/animal/animal", {
                    method: "post",
                    body: JSON.stringify(data),
                    headers: { "Content-Type": "application/json" }
                }).then(() => {
                    navigate("/Api2")
                })
               } }>Addstudent</button>  
        </>
    );
}