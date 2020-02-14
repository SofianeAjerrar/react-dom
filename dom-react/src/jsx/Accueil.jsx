import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../public/Accueil.css';

let Accueil = () => {
    return (
        <>
        <div className='divAccueil'>
            <h1 className='text-white text-decoration-none'>Bienvenue sur la page d'accueil</h1>
        </div>
        <div className='divAccueil'>
            <h1 className='bg-primary p-2 rounded-top text-white fixed-bottom mt-5'>Javascript DOM - React</h1>
        </div>
        </>
    )
}

export default Accueil;