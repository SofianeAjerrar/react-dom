import React, { useState } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../css/exo5.css';

let Exercice5 = () => {
    //TETE d'hitler

    const [count, setCount] = useState(0);
    
    let backToZero = () => {
        setCount(0);
    }

    let addAnEgg = () => {
        let imageOfEggStyle = document.createElement("img");
        let ajoutOeuf = document.getElementById('ajoutOeuf')
        imageOfEggStyle.src = "./css/oeuf.png";
        imageOfEggStyle.style.width = '10%';
        ajoutOeuf.appendChild(imageOfEggStyle);
        setCount(count + 1);
    }

    let deleteLastEgg = () => {
        let ajoutOeuf = document.getElementById('ajoutOeuf');
        if (ajoutOeuf.lastChild) {
            ajoutOeuf.removeChild(ajoutOeuf.lastChild);
            setCount(count + 1);
        }
    }

    let deleteAllEgg = () => {
        let ajoutOeuf = document.getElementById('ajoutOeuf');
        while (ajoutOeuf.lastChild) {
            ajoutOeuf.removeChild(ajoutOeuf.lastChild);
        }
        setCount(count + 1)
    }


    return (
        <div className='bg-secondary px-3 py-5 text-justify rounded container'>
            <div>
                <h1 className='mb-3 h1Exo5'>Générer des éléments du DOM avec React maBoy</h1>
                <p className='text-dark'>Cliquez sur le bouton ci-dessous pour générer des oeufs</p>
            </div>
            <div className='d-flex justify-content-center'>
                <button type="button" className="btn btn-danger mr-2" onClick={() => addAnEgg()}>Ajouter un oeuf</button>
                <button type="button" className="btn btn-danger mr-2" onClick={() => deleteLastEgg()}>Supprimer le dernier oeuf</button>
                <button type="button" className="btn btn-danger mr-2" onClick={() => deleteAllEgg()}>Retirer tout</button>
                <button type="button" className="btn btn-danger mr-2" onClick={() => backToZero()}>Compteur = <span>{count}</span></button>
            </div>
            <div id='moinsUnOeuf' className='mt-5'>
                <p id="ajoutOeuf"></p>
            </div>
        </div>
    )
}

export default Exercice5;