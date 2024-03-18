import React  from 'react';
import bannerImg from '../Images/restauranfood.jpg';
import { Link } from 'react-router-dom';

 const Header = () => {
   return (
      <header className='header'>
        <section>
          <div className='banner'>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            <Link to='reservation'>
              <button aria-label='On Click'>Reserve a Table</button>
            </Link>
          </div>
          <div className='banner-img'>
            <img src={bannerImg} alt='Restaurant food'/>
          </div>
        </section>
      </header>
      );
  };

export default Header;