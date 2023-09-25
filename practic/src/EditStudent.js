import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function EditStudent(){
    const [data,setData]=useState({});
    const {id} = useParams();
    const navigate = useNavigate();
    useEffect()
    return(
        <>
        <div class="mb-3">
            <label for="formGroupExampleInput" class="form-label">name</label>
            <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input placeholder"
                onChange={(e) => {
                    setData({ ...data, name: e.target.value })
                }} />
        </div>
        <div class="mb-3">
            <label for="formGroupExampleInput2" class="form-label">Image</label>
            <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input placeholder"
            onChange={(e) => {
                setData({ ...data, avatar: e.target.value })
            }} />
        </div>
        <div className="btn btn-info" onClick={()=>{
            fetch("https://64e2cf01bac46e480e77c54f.mockapi.io/animal/animal",{method:'post',body:JSON.stringify(data),headers:{"Content-Type":"application/json"}})
            .then(()=>
                navigate("/animal")
            );
        }}>Addstudnet</div>
    </>
    );
}