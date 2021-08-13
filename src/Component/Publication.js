import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Titrebody from "./Titrebody";
import './style.css';
import './publication.css';
class Publication extends React.Component {
    constructor() {
        super();
        this.state = {
            statut: '',
            path :'',
            listpub: [
                'salut eeee',
                'ao tsara veeee',
                'okay les e',
                'samy faly eee'
            ],
            user: [
                'ravakalphin@gmail.com',
                'rakoto@gmail.com',
                'rabe@gmail.com',
                'rasoa@gmail.com'
            ],
            photo: [
                './images/actualite1.jpg',
                './images/actualite2.jpg',
                './images/actualite3.jpg',
                './images/actualite4.jpg',
            ],
            daty: [
                '10/08/2021',
                '5/08/2021',
                '1/08/2021',
                '28/07/2021',
            ],
            jaim :[401,150,208,300]
        };
    }

    Setstatut(event) {
        this.setState({
            statut: event.target.value
        })
    }

    Getstatut(event) {
        let mail = window.prompt("Entrer votre adresse mail"),
        date = new Date(),
        daty = date.toLocaleDateString()
        if (mail != "" && mail) {
            event.preventDefault();
            this.setState({
                daty: [daty, ...this.state.daty],
                photo: [this.state.path, ...this.state.photo],
                user: [mail, ...this.state.user],
                listpub: [this.state.statut, ...this.state.listpub],
                jaim:[0,...this.state.jaim],
                statut: '',
                path:''
            })
        }
        else if (mail == "")
            window.alert("mail invalide");
    }

    Pubuser() {
        let i = 0;
        return (
            <div className="listuser col-sm-3">
                <p className="titrelien">Publication recent</p>
                {
                    this.state.user.map(
                        (user) => {
                            var lien = "#" + user + this.state.daty[i]
                            return (
                                <div>
                                    <a className="lien" href={lien}>
                                        {user + " "}
                                        {this.state.daty[i++]}
                                    </a>
                                </div>
                            )
                        }
                    )
                }
            </div>
        )
    }

    FormAjoutPub() {
        return (
            <div className="formAjoutPubmarge">
                {this.Pubuser()}
                <form role="form" className="row">
                    <div className="form-group col-sm-4 offset-sm-1">
                        <textarea
                            placeholder="Entrer votre statut"
                            value={this.state.statut}
                            className="form-control form-control-statut"
                            rows="3"
                            onChange={this.Setstatut.bind(this)}
                        />
                    </div>
                    <div class="col-sm-7">
                        <input onChange={this.Geturl.bind(this)} className="btnfile" type="file" accept="image/*" id="inputfile" />
                    </div>
                    <div className="col-sm-1 offset-sm-1">
                        <button className="" onClick={this.Getstatut.bind(this)}>Publier</button>
                    </div>
                   
                </form>
            </div>
        )
    }

    Geturl(event){
        this.setState({
            path:event.target.value
        },()=>console.log(this.state.path))
    }

    image(photo) {
        if (photo == "")
            return null;
        return <img height="350" width="560" src={photo} />
    }

    footerpub(i) {
        return (
            <div className="footerpub">
                <button value={i} className="col-sm-4" onClick={this.ClickJaim.bind(this)}>{this.state.jaim[i]} Jaim</button>
                <button className="col-sm-4">Commentaire</button>
                <button className="col-sm-4">Partage</button>
            </div>
        )
    }

    ClickJaim(event){
        event.preventDefault();
        const i=event.target.value;
        const tab=this.state.jaim;
        tab[i]=tab[i]+1;
        this.setState({
            jaim:tab
        })
        console.log(tab)
    }

    AffichagePub() {
        let i = 0;

        return (
            <div className="row">
                <div className="col-sm-6 offset-sm-1">
                    {
                        this.state.listpub.map(
                            () => {
                                return (
                                    <div className="affichepub beige">
                                        <h5
                                            id={this.state.user[i] + this.state.daty[i]}
                                            className="offset-sm-1">
                                            {this.state.user[i]}
                                        </h5>
                                        <p className="offset-sm-1">{this.state.daty[i]}</p>
                                        <p className="offset-sm-1">{this.state.listpub[i]}</p>
                                        <div className="centre">
                                            {this.image(this.state.photo[i])}
                                        </div>
                                        {this.footerpub(i++)}
                                    </div>
                                )
                            }
                        )}
                </div>
            </div>
        )
    }

    render() {
        return (
            <div>
                <Titrebody titre="PUBLICATION" />
                {this.FormAjoutPub()}
                {this.AffichagePub()}
            </div>
        )
    }
}
export default Publication;