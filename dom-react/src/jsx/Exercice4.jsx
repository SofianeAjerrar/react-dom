import React, { useState } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../public/exo4.css';
import '../public/exo2.css';


let Exercice4 = () => {

    const [place, setPlace] = useState(true);
    const [count, setCount] = useState(0);

    let backToZero = () => {
        setCount(0);
        setPlace(true);
    }

    let changerDePlace = () => {
        setPlace(!place);
        setCount(count + 1)
    }

    return (
        <>
            <div className='d-flex mx-5'>
                <div className='carreBleu mx-5 d-flex justify-content-center align-items-center'>
                    <div className={place ? 'visible' : 'invisible'}>
                        <p className='carreRose d-flex justify-content-center align-items-center'>C'est comme ca qu'on utilise les useState</p>
                    </div>
                </div>
                <div className='carreBleu mx-5 d-flex justify-content-center align-items-center'>
                    <div className={place ? 'invisible' : 'visible'}>
                        <p className='carreRose d-flex justify-content-center align-items-center'>C'est comme ca qu'on utilise les useState</p>
                    </div>
                </div>
            </div>
            <div className='mt-5'>
                <button type="button" className="btn btn-warning" onClick={() => changerDePlace()}>Changer de place</button>
            </div>
            <div className="mt-3">
                <button type="button" className="btn btn-info" onClick={() => backToZero()}>Nombre de click <span>{count}</span></button>
            </div>
        </>
    )
}

export default Exercice4;