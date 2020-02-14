import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../public/exo1.css';

let Exercice1 = () => {

    let titleChange = () => {
        let titreBeaugosse = document.getElementById('titreBeaugosse');
        titreBeaugosse.innerHTML = 'Mon titre modifié';
        titreBeaugosse.classList.add('bg-warning');
        titreBeaugosse.classList.add('text-dark');
    }

    let titleDepart = () => {
        let titreBeaugosse = document.getElementById('titreBeaugosse');
        titreBeaugosse.innerHTML = 'Mon titre';
        titreBeaugosse.classList.remove('bg-warning');
        titreBeaugosse.classList.add('bg-secondary');
        titreBeaugosse.classList.add('text-white');
    }

    return (
        <div className='bg-secondary rounded px-5 py-3'>
            <div className='text-justify'>
                <h1 id='titreBeaugosse' onMouseOver={() => titleChange()} onMouseOut={() => titleDepart()}>Mon titre</h1>
                <p>Liste de propriété et méthodes à retrouver dans la documentation :</p>
                <ol className='listDesign'>
                    <li className='d-flex justify-content-center py-0 rounded'>
                        <p>InnerText</p>
                    </li>
                    <li className='d-flex justify-content-center py-0 rounded'>
                        <p>InnerHTML</p>
                    </li>
                    <li className='d-flex justify-content-center py-0 rounded'>
                        <p>querySelector()</p>
                    </li>
                    <li className='d-flex justify-content-center py-0 rounded'>
                        <p>querySelectorAll()</p>
                    </li>
                    <li className='d-flex justify-content-center py-0 rounded'>
                        <p>Style</p>
                    </li>
                    <li className='d-flex justify-content-center py-0 rounded'>
                        <p>classList</p>
                    </li>
                </ol>
                <div className='text-center'>
                    <p>Changer le contenu du h1 par titre modifié.</p>
                    <p>Changer la couleur du h1.</p>
                    <p>Ajouter une class background bootstrap au h2</p>
                </div>

            </div>
        </div>
    )
}

export default Exercice1;