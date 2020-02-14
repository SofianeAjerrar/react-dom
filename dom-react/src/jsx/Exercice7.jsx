import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../css/exo7.css';

let Exercice7 = () => {

    let addAChild = () => {
        //Checkbox
        let inputCheckbox = document.createElement('input');
        let inputExo7 = document.getElementById('inputExo7');
        inputCheckbox.type = 'checkbox';

        // InputExo 7
        let toDoPupelos = document.getElementById('toDoPupelos');
        let para = document.createElement('p');
        para.innerHTML = inputExo7.value;
        //Delete Button
        let inputDelete = document.createElement('button');
        inputDelete.innerHTML = 'Supprimer'

        //Appendchild
        para.appendChild(inputCheckbox);
        toDoPupelos.appendChild(para);
        para.appendChild(inputDelete);
        inputExo7.value = '';

        //apparition deleteButton
        inputDelete.onclick = () => {
            inputDelete.parentElement.remove()
        }

        // checkbox vert ou pas
        inputCheckbox.onclick = () => {
            if (inputCheckbox.checked) {
                para.style.backgroundColor = 'green';
            } else {
                para.style.backgroundColor = 'unset';
            }
        }
    }

    return (
        <div>
            <h1>To do List</h1>
            <hr />
            <input
                id='inputExo7'
                type="text"
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-sm"
                onKeyUp={(e) => {
                    if (e.keyCode === 13) {
                        // if ( != '') {
                            addAChild()
                        // }
                    }
                }}
            />
            <div>
                <button type="button" className="btn btn-primary m-2">Toutes</button>
                <button type="button" className="btn btn-primary m-2">Completées</button>
                <button type="button" className="btn btn-primary m-2">A faire</button>
            </div>
            <div id='toDoPupelos'>

            </div>
            <hr />
        </div>
    )
}

export default Exercice7;