import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './style.css';


function Titrebody(props){
    return (
        <div className="row titrebody text-center">
            <b className="beige">{props.titre}</b>
        </div>
    );
}

export default Titrebody;