import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../css/exo6.css';

let Exercice6 = () => {

    let calculatorLvl1 = () => {
        let firstNumber = parseInt(document.getElementById('firstNumber').value);
        let secondNumber = parseInt(document.getElementById('secondNumber').value);
        let responseOfCalcul = document.getElementById('responseOfCalcul');
        let mySelector = document.getElementById('mySelector')

        switch (mySelector.value) {
            case "+":
                responseOfCalcul.innerHTML = firstNumber + secondNumber;
                break;

            case "-":
                responseOfCalcul.innerHTML = firstNumber - secondNumber;
                break;

            case "/":
                responseOfCalcul.innerHTML = firstNumber / secondNumber;
                break;

            case "*":
                responseOfCalcul.innerHTML = firstNumber * secondNumber;
                break;
        }

    }

    let calculatorLvl2 = (value, event) => {
        let inputCalculator2 = document.getElementById('inputCalculator2');
        if (event.keyCode === 13) {
            inputCalculator2.value += value;
        }
    }

    return (
        <>

            {/* CALCULETTE 1 */}
            <div>
                <h3 className='mb-5'>Niveau 1</h3>
                <div className='d-flex'>
                    <input className='mr-2' type="text" id='firstNumber' />
                    <select id='mySelector'>
                        <option value="">Choisissez votre opérateur</option>
                        <option value='+'>+</option>
                        <option value='-'>-</option>
                        <option value='/'>/</option>
                        <option value='*'>*</option>
                    </select>
                    <input className='ml-2' type="text" id='secondNumber' />
                    <button onClick={() => calculatorLvl1()}>=</button>
                    <p className='ml-5'><span id="responseOfCalcul">0</span></p>
                </div>
            </div>


            {/* CALCULETTE 2 */}
            <div>
                <h3 className='mb-5'>Niveau 2</h3>
                <input id='inputCalculator2' type="text" />
                <div className='justify-content-center'>
                    <div className='divExo6'>
                        <button className='buttonCalculator mr-0' onClick={() => calculatorLvl2(7)}>7</button>
                        <button className='buttonCalculator mr-0' onClick={() => calculatorLvl2(8)}>8</button>
                        <button className='buttonCalculator mr-0' onClick={() => calculatorLvl2(9)}>9</button>
                        <button className='buttonCalculator mr-0' onClick={() => calculatorLvl2('/')}>/</button>
                    </div>
                    <div className='divExo6'>
                        <button className='buttonCalculator mr-0' onClick={() => calculatorLvl2(4)}>4</button>
                        <button className='buttonCalculator mr-0' onClick={() => calculatorLvl2(5)}>5</button>
                        <button className='buttonCalculator mr-0' onClick={() => calculatorLvl2(6)}>6</button>
                        <button className='buttonCalculator mr-0' onClick={() => calculatorLvl2('*')}>*</button>
                    </div>
                    <div className='divExo6'>
                        <button className='buttonCalculator mr-0' onClick={() => calculatorLvl2(1)}>1</button>
                        <button className='buttonCalculator mr-0' onClick={() => calculatorLvl2(2)}>2</button>
                        <button className='buttonCalculator mr-0' onClick={() => calculatorLvl2(3)}>3</button>
                        <button className='buttonCalculator mr-0' onClick={() => calculatorLvl2('-')}>-</button>
                    </div>
                    <div className='divExo6'>
                        <button className='buttonCalculator mr-0' onClick={() => calculatorLvl2(0)}>0</button>
                        <button className='buttonCalculator mr-0' onClick={() => calculatorLvl2('c')}>C</button>
                        <button className='buttonCalculator mr-0' onClick={() => calculatorLvl2('=')}>=</button>
                        <button className='buttonCalculator mr-0' onClick={() => calculatorLvl2('+')}>+</button>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Exercice6;