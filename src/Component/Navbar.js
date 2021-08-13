import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';
import './style.css';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    constructor() {
        super();
    }

    Menu() {
        return (
            <div className="row bg-danger centre">
                <Link to="/" className="col-sm-2 link offset-sm-2">ACTUALITE</Link>
                <Link to="/publications" className="col-sm-2 link">PUBLICATIONS</Link>
                <Link to="/services" className="col-sm-2 link">SERVICES</Link>
                <Link to="/apropos" className="col-sm-2 link">A PROPOS</Link>
            </div>
        );
    }

    render() {
        return (
            this.Menu()
        );
    }
}

export default Navbar;