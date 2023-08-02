import { Link } from 'react-router-dom'
import './style.scss';

const Doclist = () => {
  return (
    <div className='list'>
    
    <Link to='/profile'> <div className='item' >
        <h3 className='item-profession'> Ophtalmo</h3>
        <p className='item-details'> controle d'yeux </p>
      </div> 
      </Link>
      <div className='item'>
        <h3 className='item-profession'> ORL</h3>
        <p className='item-details'> controle d'yeux </p>
      </div>
      <div className='item' >
        <h3 className='item-profession'> Ophtalmo</h3>
        <p className='item-details'> controle d'yeux </p>
      </div> 
      <div className='item'>
        <h3 className='item-profession'> ORL</h3>
        <p className='item-details'> controle d'yeux </p>
      </div>
      <div className='item'>
        <h3 className='item-profession'> GYneco</h3>
        <p className='item-details'> controle d'yeux </p>
      </div>
    </div>
  );
};

export default Doclist;
