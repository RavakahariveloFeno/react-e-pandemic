import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './slide.css';


class Slide extends React.Component {
    constructor() {
        super();
    }

    entete() {
        return (
            <div className="row tete col-sm-12">
                <div className="col-sm-3 offset-sm-1">
                    <b>e-pandemic</b>
                </div>
                <div className="col-sm-3">
                    <input
                        placeholder="Récherche dans le site..."
                        type="text"
                        className="col-sm-12"
                    />
                </div>
            </div>
        );
    }

    imageslide(path, carouselitem = "carousel-item") {
        return (
            <div className={carouselitem}>
                {this.entete()}
                <img height="140" src={path} className="d-block w-100" alt="..." />
            </div>
        );
    }

    SlideGo() {
        return (
            <div id="carouselExampleFade" className="carousel slide carousel-fade hauteur" data-bs-ride="carousel">
                <div className="carousel-inner">
                    {this.imageslide("./Images/slide2.jpg", "carousel-item active")}
                    {this.imageslide("./Images/slide3.jpg")}
                    {this.imageslide("./Images/slide4.png")}
                </div>
            </div>
        );
    }
    render() {
        return (
            this.SlideGo()
        );
    }
}

export default Slide;