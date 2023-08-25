import { Outlet } from 'react-router-dom';
import React from 'react';
export default function UseState() {
    return (
        <div className='container'>
            <div className="m-2"><button className="btn btn-info" onClick={() => {
                console.log("button clicked");
            }}>click me</button>
            </div>
            <Outlet/>
        </div>
    );
} 