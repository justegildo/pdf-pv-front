import React, { useState } from 'react';
import axios from 'axios';

const Generation = () => {
    const [president_id, setPresident_id ] = useState("")
    const [rapporteur_id, setRapporteur_id ] = useState("")
    const [examinateur_id, setExaminateur_id ] = useState("")
    const [etudiant_id, setEtudiant_id ] = useState("")


//add-etudiant
    const [data1, setData1] = useState({
        nom_etudiant: "",
        prenom_etudiant: "",
        date_naissance: "",
        lieu_naissance: "",
        filiere: "",
        formation: "",
        annee_academique: "",
        campus: "",
        theme: "",
        type_document: "",
        nom_maitre: ""
    })

    const onChange1 =(e) =>{
        setData1({
            ...data1, president_id, examinateur_id, rapporteur_id,
            [e.target.name] : e.target.value
        })
        
    }

    const onSubmit1 = () =>{
        console.log(data1);
        axios.post('http://localhost:5000/api-pv/add-etudiant', {
            nom_etudiant: data1.nom_etudiant,
            prenom_etudiant: data1.prenom_etudiant,
            date_naissance: data1.date_naissance,
            lieu_naissance: data1.lieu_naissance,
            filiere: data1.filiere,
            formation: data1.formation,
            annee_academique: data1.annee_academique,
            campus: data1.campus,
            theme: data1.theme,
            type_document: data1.type_document,
            nom_maitre: data1.nom_maitre,
            president_id: data1.president_id, 
            examinateur_id: data1.examinateur_id, 
            rapporteur_id: data1.rapporteur_id
        })
            .then(function (response) {
                console.log(response);
                setEtudiant_id(response.data.id_etudiant)
                console.log(etudiant_id);
            })
            .catch(function (error) {
                console.log(error);
            })

    }


    //
    const [data2, setData2] = useState({
        nom_president: "",
        prenom_president: "",
        grade_president: "",

        nom_rapporteur: "",
        prenom_rapporteur: "",
        grade_rapporteur: "",

        nom_examinateur: "",
        prenom_examinateur: "",
        grade_examinateur: ""
    })

    const onChange2 =(e) =>{
        setData2({
            ...data2,
            [e.target.name] : e.target.value
        })
    }

    const onSubmit2 = () =>{
        //console.log(data2.grade_president);

        axios.post('http://localhost:5000/api-pv/add-president', {
            nom_president: data2.nom_president, 
            prenom_president: data2.prenom_president,
            grade_president: data2.grade_president
        })
            .then(function (response) {
                console.log(response.data.id_president);
                setPresident_id(response.data.id_president)
                console.log(president_id);
            })
            .catch(function (error) {
                console.log(error);
            })
        
        axios.post('http://localhost:5000/api-pv/add-rapporteur', {
            nom_rapporteur: data2.nom_rapporteur,
            prenom_rapporteur: data2.prenom_rapporteur,
            grade_rapporteur: data2.grade_rapporteur,
        })
            .then(function (response) {
                console.log(response);
                setRapporteur_id(response.data.id_rapporteur)
                console.log(rapporteur_id);
            })
            .catch(function (error) {
                console.log(error);
            })

        axios.post('http://localhost:5000/api-pv/add-examinateur', {
            nom_examinateur: data2.nom_examinateur,
            prenom_examinateur: data2.prenom_examinateur,
            grade_examinateur: data2.grade_examinateur
        })
            .then(function (response) {
                console.log(response);
                setExaminateur_id(response.data.id_examinateur)
                console.log(examinateur_id);
            })
            .catch(function (error) {
                console.log(error);
            })

    }

//add-ligne
    const [data3, setData3] = useState({
        date_soutenance: "", 
        heure_soutenance: "",
        resultat: "",
        mention: "",
        note: ""
        
    })

    const onChange3 =(e) =>{
        setData3({
            ...data3, etudiant_id,
            [e.target.name] : e.target.value
        })
    }

    const onSubmit3 = () =>{
        console.log(data3);

        axios.post('http://localhost:5000/api-pv/add-ligne', {
            date_soutenance: data3.date_soutenance, 
            heure_soutenance: data3.heure_soutenance,
            resultat: data3.resultat,
            mention: data3.mention,
            note: data3.note,
            etudiant_id: data3.etudiant_id
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            })

    }

    const generate = () =>{
        axios.get(`http://localhost:5000/api-pv/${etudiant_id}`)
            .then(function (response) {
                // handle success
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }


  
    return (
        <div className=''>

            <h3>Ajout d'un étudiant</h3>
            <form>
                <div className='row' >
                    <div className="mb-3 col-6">
                        <label htmlFor="nom_etudiant" className="form-label">Nom </label>
                        <input type="text" name='nom_etudiant' className="form-control" id="nom_etudiant" onChange={onChange1} />
                    </div>
                    <div className="mb-3 col-6">
                        <label htmlFor="prenom_etudiant" className="form-label">Prénoms</label>
                        <input type="text" name='prenom_etudiant' className="form-control" id="prenom_etudiant" onChange={onChange1} />
                    </div>
                    <div className="mb-3 col-6">
                        <label htmlFor="date_naissance" className="form-label">Date de naissance</label>
                        <input type="date" name='date_naissance' className="form-control" id="date_naissance" onChange={onChange1} />
                    </div>
                    <div className="mb-3 col-6">
                        <label htmlFor="lieu_naissance" className="form-label">Lieu de naissance </label>
                        <input type="text" name='lieu_naissance' className="form-control" id="lieu_naissance" onChange={onChange1} />
                    </div>
                    <div className="mb-3 col-6">
                        <label htmlFor="filiere" className="form-label">Filière</label>
                        <input type="text" name='filiere' className="form-control" id="filiere" onChange={onChange1} />
                    </div>
                    <div className="mb-3 col-6">
                        <label htmlFor="formation" className="form-label">Formation </label>
                        <input type="text" name='formation' className="form-control" id="formation" onChange={onChange1} />
                    </div>
                    <div className="mb-3 col-6">
                        <label htmlFor="annee_academique" className="form-label">Année académique </label>
                        <input type="text" name='annee_academique' className="form-control" id="annee_academique" onChange={onChange1} />
                    </div>
                    <div className="mb-3 col-6">
                        <label htmlFor="campus" className="form-label">Campus </label>
                        <input type="text" name='campus' className="form-control" id="campus" onChange={onChange1} />
                    </div>
                    <div className="mb-3 col-6">
                        <label htmlFor="theme" className="form-label">Thème</label>
                        <input type="text" name='theme' className="form-control" id="theme" onChange={onChange1} />
                    </div>
                    <div className="mb-3 col-6">
                        <label htmlFor="type_document" className="form-label">Type document</label>
                        <input type="text" name='type_document' className="form-control" id="type_document" onChange={onChange1} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="nom_maitre" className="form-label">Maitre mémoire </label>
                        <input type="text" name='nom_maitre' className="form-control" id="nom_maitre" onChange={onChange1} />
                    </div>
                    {/* <div className="mb-3 col-6" style={{ display: 'none' }}>
                        <label htmlFor="president_id" className="form-label">Président </label>
                        <input type="text" name='president_id' className="form-control" id="president_id" onChange={onChange1} value={getIdPre}/>
                    </div>
                    <div className="mb-3 col-6" style={{ display: 'none' }}>
                        <label htmlFor="rapporteur_id" className="form-label">Rapporteur</label>
                        <input type="text" name='rapporteur_id' className="form-control" id="rapporteur_id" onChange={onChange1} value={rapporteur_id}/>
                    </div>
                    <div className="mb-3 col-6" style={{ display: 'none' }} >
                        <label htmlFor="examinateur_id" className="form-label">Examinateur</label>
                        <input type="text" name='examinateur_id' className="form-control" id="examinateur_id" onChange={onChange1} value={examinateur_id}/>
                    </div> */}

                    <button type="button" className="btn btn-primary" onClick={onSubmit1} >
                        Envoyer
                    </button> <p></p>

                    <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#myModal" >
                        Ajouter des membres
                    </button> <p></p>

                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal2">
                       Ajouter des infos complémentaires
                    </button>

                    <button type="button" className="btn btn-primary" onClick={generate}>
                       Générer le pv
                    </button>
                </div>
            </form>

            {/* modal membre  */}
            <div className="modal" id="myModal">
                <div className="modal-dialog">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h4 className="modal-title">Ajout des membres du jury</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        <div className="modal-body row">
                            <div className="mb-3 col-6">
                                <label htmlFor="nom_president" className="form-label">Nom du président</label>
                                <input type="text" name='nom_president' className="form-control" id="nom_president" onChange={onChange2} />
                            </div>
                            <div className="mb-3 col-6">
                                <label htmlFor="prenom_president" className="form-label">Prénoms du président</label>
                                <input type="text" name='prenom_president' className="form-control" id="prenom_president" onChange={onChange2} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="grade_president" className="form-label">Grade du président</label>
                                <input type="text" name='grade_president' className="form-control" id="grade_president" onChange={onChange2} />
                            </div>


                            <div className="mb-3 col-6">
                                <label htmlFor="nom_rapporteur" className="form-label">Nom du rapporteur</label>
                                <input type="text" name='nom_rapporteur' className="form-control" id="nom_rapporteur" onChange={onChange2} />
                            </div>
                            <div className="mb-3 col-6">
                                <label htmlFor="prenom_rapporteur" className="form-label">Prénoms du rapporteur</label>
                                <input type="text" name='prenom_rapporteur' className="form-control" id="prenom_rapporteur" onChange={onChange2} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="grade_rapporteur" className="form-label">Grade du rapporteur</label>
                                <input type="text" name='grade_rapporteur' className="form-control" id="grade_rapporteur" onChange={onChange2} />
                            </div>


                            <div className="mb-3 col-6">
                                <label htmlFor="nom_examinateur" className="form-label">Nom d'examinateur</label>
                                <input type="text" name='nom_examinateur' className="form-control" id="nom_examinateur" onChange={onChange2} />
                            </div>
                            <div className="mb-3 col-6">
                                <label htmlFor="prenom_examinateur" className="form-label">Prénoms d'examinateur</label>
                                <input type="text" name='prenom_examinateur' className="form-control" id="prenom_examinateur" onChange={onChange2} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="grade_examinateur" className="form-label">Grade d'examinateur</label>
                                <input type="text" name='grade_examinateur' className="form-control" id="grade_examinateur" onChange={onChange2} />
                            </div>

                            <div className='row'>
                                <button type="button" className="btn btn-danger col-6" data-bs-dismiss="modal">
                                    Fermer
                                </button>
                                <button type="button" className="btn btn-primary col-6" onClick={onSubmit2}>
                                    Ajouter
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>



            {/* modal ligne */}
            <div className="modal" id="myModal2">
                <div className="modal-dialog">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h4 className="modal-title">Ligne</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        <div className="modal-body row">
                            <div className="mb-3 col-6">
                                <label htmlFor="date_soutenance" className="form-label">Date soutenance</label>
                                <input type="date" name='date_soutenance' className="form-control" id="date_soutenance" onChange={onChange3} />
                            </div>
                            <div className="mb-3 col-6">
                                <label htmlFor="heure_soutenance" className="form-label">Heure soutenance</label>
                                <input type="text" name='heure_soutenance' className="form-control" id="heure_soutenance" onChange={onChange3} />
                            </div>
                            <div className="mb-3 col-6">
                                <label htmlFor="resultat" className="form-label">Résultat</label>
                                <input type="text" name='resultat' className="form-control" id="resultat" onChange={onChange3} />
                            </div>
                            <div className="mb-3 col-6">
                                <label htmlFor="mention" className="form-label">Mention</label>
                                <input type="text" name='mention' className="form-control" id="mention" onChange={onChange3} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="note" className="form-label">Note</label>
                                <input type="text" name='note' className="form-control" id="note" onChange={onChange3} />
                            </div>
                            {/* <div className="mb-3 col-6" >
                                <label htmlFor="etudiant_id" className="form-label">Etudiant</label>
                                <input type="text" name='etudiant_id' className="form-control" id="etudiant_id" onChange={onChange3} value={etudiant_id} />
                            </div> */}

                            <div className='row'>
                                <button type="button" className="btn btn-danger col-6" data-bs-dismiss="modal">
                                    Fermer
                                </button>
                                <button type="button" className="btn btn-primary col-6" onClick={onSubmit3}>
                                    Ajouter
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );

};

export default Generation;