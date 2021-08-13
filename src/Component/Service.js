import React from 'react';
import Titrebody from './Titrebody';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import './service.css';
class Service extends React.Component {
    constructor() {
        super();
    }

    Corps() {
        return (
            <div className="">
                <div className="centre titre">
                    <b className="text-danger">Centre de Vaccinations Internationales</b>
                </div>
                {this.Table()}
                <div className="centre titre">
                    <b className="text-danger">Laboratoire d’hygiène des aliments et de l’environnement ( LHAE )</b>
                </div>
                <div className="container">
                    <p>
                    L’Institut Pasteur de Madagascar dispose d’un Laboratoire d’Hygiène des Aliments et de l’Environnement (LHAE) dont les activités de diagnostic sont axées sur la surveillance des risques sanitaires liés à l’alimentation, aux eaux et à l’environnement. Il est Centre National de Référence Salmonelles, Shigelles et Vibrio cholerae, conjointement avec le Centre de Biologie Clinique de l’Institut Pasteur de Madagascar. Le LHAE collabore avec les professionnels de l’agro-alimentaire pour un renforcement des capacités analytiques au plan national, notamment par des formations organisées auprès des laboratoires d’autocontrôles. Il continue à développer une expertise locale dans le domaine de la sécurité sanitaire des eaux et des aliments. Le LHAE est accrédité par le COFRAC (Comité Français d’Accréditation) pour ses activités d’analyses sous référence N°1-1872, selon la norme NF EN ISO/CEI 17025 (portée disponible sur www.cofrac.fr) 
                    </p>
                </div>
                <div className="centre titre">
                    <b className="text-danger">
                    Les activités du LHAE
                    </b>
                </div>
                <div className="container">
                    <p>
                   
    Analyses microbiologiques des produits agro-alimentaires et environnement de production;
    Analyse microbiologiques de tous types d’eau: consommation, rejets, superficielles, eaux chaudes sanitaires (légionnelles);
    Dosage d’aflatoxines dans les produits alimentaires;
    Formation d’agents de laboratoire, en délivrant des stages d’initiation et/ou de perfectionnement en analyses microbiologiques des aliments et/ou de l’eau pour divers techniques d’analyses microbiologiques;
    Encadrement des étudiants des Instituts (privés et publics), des grandes écoles dans le cadre de projets de recherche ou de stages en fin de cursus;
    Suivi de l’hygiène dans les sociétés de grande distribution, les structures de restauration collective et les industries-agroalimentaires;
    Formation en hygiène et sécurité des aliments pour tous les acteurs intervenant dans le domaine de l’alimentation (possibilité de formation en malgache);
    Accompagnement dans la mise en place d’un système HACCP, d’un plan de maîtrise sanitaire dans les industries des métiers de bouche, ainsi que dans les entreprises agro-alimentaires;
    Audit/Conseils pour les laboratoires d’autocontrôles dans les industries agro-alimentaires.
 
                    </p>
                </div>
            </div>
        )
    }

    Table() {
        return (
            <table className="table container">
                <thead>
                    <tr>
                        <th></th>
                        <th>VACCIN</th>
                        <th>PRIX (ARIARY)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="active">
                        <td>Hépatite A</td>
                        <td>AVAXIM</td>
                        <td>112 000</td>

                    </tr>
                    <tr className="success">
                        <td>Hépatite B</td>
                        <td>EUVAX B</td>
                        <td>112 000</td>
                    </tr>
                    <tr className="success">
                        <td>Grippe</td>
                        <td>VAXIGRIP TETRA 2021 	</td>
                        <td>112 000</td>
                    </tr>
                    <tr className="success">
                        <td>Fièvre typhoïde</td>
                        <td>TYPHIM</td>
                        <td>112 000</td>
                    </tr>
                    <tr className="success">
                        <td>Méningite</td>
                        <td>MENINGO A+C</td>
                        <td>112 000</td>
                    </tr>
                    <tr className="success">
                        <td>DT Coqueluche acellulaire, Haemophilus influenzae b</td>
                        <td>PENTAXIM</td>
                        <td>112 000</td>
                    </tr>
                    <tr className="success">
                        <td>Diphtérie, tétanos, coquelucheux acellulaire, hépatite B, poliomyélite, Haemophilus influenzae b</td>
                        <td>HEXAXIM</td>
                        <td>112 000</td>
                    </tr>
                    <tr className="success">
                        <td>Tétanos</td>
                        <td>TETAVAX</td>
                        <td>112 000</td>
                    </tr>
                    <tr className="success">
                        <td>Diphtérie, tétanos, poliomyélite</td>
                        <td>DULTAVAX</td>
                        <td>112 000</td>
                    </tr>
                    <tr className="success">
                        <td>Rougeole, oreillon, Rubéole</td>
                        <td>R.O.R ou M.M.R</td>
                        <td>112 000</td>
                    </tr>
                    <tr className="success">
                        <td>Test Tuberculine</td>
                        <td>TUBERSOL*</td>
                        <td>112 000</td>
                    </tr>
                    <tr className="success">
                        <td>Rage</td>
                        <td> 	VERORAB</td>
                        <td>112 000</td>
                    </tr>
                    <tr className="success">
                        <td>Fièvre jaune</td>
                        <td>STAMARIL</td>
                        <td>112 000</td>
                    </tr>
                    <tr className="success">
                        <td>Pneumocoque</td>
                        <td>PNEUMO 23</td>
                        <td>112 000</td>
                    </tr>
                </tbody>
            </table>
        )
    }

    render() {
        return (
            <div>
                <Titrebody titre="Service" />
                {this.Corps()}
            </div>
        );
    }
}
export default Service;