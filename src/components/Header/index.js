import React from 'react';
import  { NavLink} from 'react-router-dom';
import Button from '../../UI/Button';
import './style.scss';

const Header = () => {
    return (
        <header>
            <section>
           <NavLink className='nav-item' > MENU </NavLink >
           <NavLink className='nav-item' > MENU </NavLink >
           <NavLink className='nav-item' > MENU </NavLink >
           </section >

           <section className='header-intro'>
           <h2> Welcome to DocCare</h2>
           <p>lorem ipusm iprusm prujjsjnqsnmk tatum </p>
           </section >

           <section className='header-button'>
           <Button>Explore </Button>
          
           </section >
           
        </header>
    );
};

export default Header;
