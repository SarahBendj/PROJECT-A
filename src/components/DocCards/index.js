import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

const DocCards = () => {

 
  return (
    <div  className='cards'>
     <Link to='/doctors-list'>  <div className='card' >
        <img className='card-img'src="" alt="" />
        <h3 className='card-profession'> Ophtalmo</h3>
        <p className='card-details'> controle d'yeux </p>
      </div> </Link>
      <div className='card'>
        <img className='card-img'src="" alt="" />
        <h3 className='card-profession'> ORL</h3>
        <p className='card-details'> controle d'yeux </p>
      </div>
      <div className='card'>
        <img className='card-img'src="" alt="" />
        <h3 className='card-profession'> GYneco</h3>
        <p className='card-details'> controle d'yeux </p>
      </div>
    </div>
  );
};

export default DocCards;
