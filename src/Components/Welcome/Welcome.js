import React from 'react';
import { Link } from 'react-router-dom';
import './Welcome.css'
import bg from '../../images/bg.jpg'

const style={
    backgroundImage: `url("${bg}")` ,
    backgroundPosition: 'center',
    backgroundSize:'cover',
    backgroundRepeat: 'no-repeat',
    minHeight: '100%',
    width: '100%',
    position:'fixed',
    overflow: 'auto',
    height: '100%',
   
  }

const Welcome = () => {
    return (
        <section style={style}>
        <div className="container text-center welcome " >
          <Link to='/index'> <button className='btn welcome-btn text-uppercase my-3' >Empathy index</button></Link>
          <br/>
          <Link to='/home'> <button className='btn welcome-btn text-uppercase'>Empathy Assessment</button></Link>
        </div>
        </section>
    );
};

export default Welcome;