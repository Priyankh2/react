import React from "react";
export default class Content extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <img className="img-fluid" src="https://darshan.ac.in/U01/Slider/Slide_5.jpg?V=2.1.4" />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <ul className="list-group">
                            <li className="list-group-item">An item</li>
                            <li className="list-group-item">A second item</li>
                            <li className="list-group-item">A third item</li>
                            <li className="list-group-item">A fourth item</li>
                            <li className="list-group-item">And a fifth one</li>
                        </ul>
                    </div>
                </div>
            </div>

        );
    }
}