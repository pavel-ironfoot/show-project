import notFound from './img/errorGit.png';
import React from 'react';
import { useLocation } from 'react-router';

import './NotFoundPage.scss';

const NotFoundPage = () =>{
    let location = useLocation();

    return (
        <div>
            <figure>
                <img className='img' src={notFound} alt="Not Found 404" />
                <figcaption className='text'>No match for<strong>{location.pathname}</strong></figcaption>
            </figure>
        </div>
    );
}

export default NotFoundPage;