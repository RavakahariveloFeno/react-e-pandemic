import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Titrebody from './Titrebody';
import './actualite.css';
import './style.css';
class Actualite extends React.Component {
    constructor() {
        super();
    }

    Images = [
        './images/actualite1.jpg',
        './images/actualite2.jpg',
        './images/actualite3.jpg',
        './images/actualite4.jpg',
        './images/actualite1.jpg',
        './images/actualite2.jpg',
        './images/actualite3.jpg',
        './images/actualite4.jpg'
    ];

    Titrecommentaire = [
        'COVID',
        'Le Centre de Vaccinations Internationales',
        'vaccins',
        'OMS',
        'FIEVRE JAUNE',
        'vaccins',
        'OMS',
        'COVID'
    ];

    Commentaire = [
        '',
        'Le Centre de Vaccinations Internationales  est le centre de consultations en matière de vaccination qui assure les vaccinations recommandées à Madagascar et exigées pour les voyages internationaux. Il assure aussi la réalisation d’intradermoréaction (IDR) à la tuberculine.',
        'Lundi au Vendredi : De 08h à 11 h 30 et de 14 à 16 h. Il n’est pas possible de prendre de rendez-vous. Pour nous contacter :',
        'Les noms commerciaux des vaccins sont donnés à titre indicatif car pouvant varier en fonction du circuit d\'approvisionnement.    ',
        'Amendement à l’annexe 7 (fièvre jaune) du Règlement sanitaire international (OMS) :',
        'Lundi au Vendredi : De 08h à 11 h 30 et de 14 à 16 h. Il n’est pas possible de prendre de rendez-vous. Pour nous contacter :',
        'Les noms commerciaux des vaccins sont donnés à titre indicatif car pouvant varier en fonction du circuit d\'approvisionnement.    ',
        'Amendement à l’annexe 7 (fièvre jaune) du Règlement sanitaire international (OMS) :',
    ];

    Footcommentaire=[
        '29 Juil 2021 - Réf: CW40855',
        '28 Juil 2021 - Réf: BW40844',
        '28 Juil 2021 - Réf: BW40843',
        '26 Juil 2021 - Réf: CW40842 ',
        '29 Juil 2021 - Réf: CW40855',
        '28 Juil 2021 - Réf: BW40844',
        '28 Juil 2021 - Réf: BW40843',
        '26 Juil 2021 - Réf: CW40842 '
    ];

    Corps() {
        var i = 0;
        return (
            <div className="row">
                {
                    this.Images.map(
                        (image) => {
                            return (
                                <div className="col-sm-3 corpsimage">
                                    <div className="centre">
                                        <img height="150" width="271" src={image} /><br />
                                    </div>
                                    <div className="container">
                                        <div className="bodycommentaire beige">
                                            <div className="text-danger fw-bold">
                                                {this.Titrecommentaire[i]}
                                            </div>
                                            <div>
                                                {this.Commentaire[i]}
                                            </div>
                                            <div className="footcommentaire">
                                                {this.Footcommentaire[i++]}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        }
                    )
                }
            </div>
        );
    }

    render() {

        return (
            <div>
                <Titrebody titre="TOUTE L'ACTUALITE" />
                {this.Corps()}
            </div>
        );
    }
}
export default Actualite;