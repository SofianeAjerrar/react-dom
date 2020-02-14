import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../public/exo3.css';

let Exercice3 = () => {

    let changeContentOfSpan = () => {
        let spanExo3 = document.getElementById('spanExo3');
        let inputExo3 = document.getElementById('inputExo3');
        if (inputExo3.value != '') {
            spanExo3.innerHTML = inputExo3.value;
            inputExo3.innerHTML = '';
            inputExo3.style.borderColor = 'none'
        } else {
            inputExo3.style.borderColor = 'red'
        }
    }

    return (
        <div className='bg-secondary px-5 py-3 rounded text-justify container divExo3'>
            <h1 className='h1Exo3'>Welcome <span id='spanExo3'>bel inconnu</span></h1>
            <p>Ecrivez dans l'input ci-dessous le nom de la personne que vous voulez accueillir.</p>
            <p>Lorse que vous cliquez sur le bouton "go" le nom que vous avez ajouté dans l'input sera alors mis dans le span du h2 et l'input sera alors vidé de tout contenu préalable.</p>
            <p>Interdiction de toucher à l'HTML</p>
            <p className='text-danger'>Bonus: Lorsque vous appuyez sur "enter" après avoir écrit le nom, le changement de nom s'effectue également.</p>
            <div className='text-center'>
                <input id='inputExo3' placeholder='Veuillez entrez un nom' type="text" />
                <button id='buttonExo3' onClick={() => changeContentOfSpan()}>Go</button>
            </div>
        </div>
    )
}


export default Exercice3;