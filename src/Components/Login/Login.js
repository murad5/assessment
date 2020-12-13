import React, { useState } from 'react';
import img from '../../images/socrates.jpg'
import bg from '../../images/bg-main.jpg'
import './Login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';

const style={
    backgroundImage: `url("${bg}")` ,
    backgroundPosition: 'center',
    backgroundSize:'cover',
    backgroundRepeat: 'no-repeat',
    minHeight: '100%',
    minWidth: '1024px',
    width: '100%',
    height: 'auto',
    position: 'fixed',
    top: 0,
    left: 0 
  }

const Login = () => {
    const [newUser, setNewUser] = useState(false);
    const history = useHistory();

    const handleSubmit =() => {
      history.push("/home");
    }

    return (
    <section style={style}>
    <div className="container  " >
      <div className="d-flex justify-content-center my-5">
      
        
        <div className=" my-5 p-3 " style={{ backgroundColor:'white' }}>
           <div className="row">
               <div className="col-md-8 col-sm-6">
                    <div style={{ fontSize: '20px', fontWeight: 'bold' }}>
                        <h2>Know Thyself</h2>
                    </div>
                        
                    <p className="text-muted text-center">Sign in to start your session</p>
               </div>
               <div className="col-md-4">
                   <img src={img}  style={{width: '100px', height:'100px' }} alt=""/>
               </div>
           </div>
       
        <form className="my-3">
          

            { newUser &&
              <div className="form-group">
                <input className="form-control mb-2" type="text"  name="firstName" placeholder="First name" required />
              </div>
            }

            { newUser &&
              <div className=" form-group">
                <input className="form-control mb-2" type="text" name="lastName" placeholder="Last name" required />
              </div>
            }

            <div className="form-group">
              <input className="form-control mb-2" type="email"  name="email" placeholder="Enter email"    />
            </div>

            <div className="form-group"> 
              <input className="form-control mb-2" type="password" name="password" placeholder="Enter password" />
            </div>

           
            <div className="row ">
                <div className="col-md-8">     
            {
              newUser ?
                <div>
                  <p className="forgot-password ">
                     <span className="text-danger" style={{ cursor: 'pointer' }} onClick={() => setNewUser(!newUser)} >Already registered?</span>
                  </p>
                </div>
                :
                <div>
                  <p className="forgot-password ">
                    <span className="text-danger" style={{ cursor: 'pointer' }} onClick={() => setNewUser(!newUser)} >Not yet registered?</span>
                  </p>
                </div>
            }
         
            <div>
                  <p className="forgot-password ">
                    <span className="text-danger" style={{ cursor: 'pointer' }} onClick={() => setNewUser(!newUser)} >Are you an admin?</span>
                  </p>
                </div>


                </div>
                <div className="col-md-4 d-flex justify-content-end">
                    
                    {
                    newUser ?
                        <div>
                        <input className="form-control btn text-light sign-btn" type="submit"  value="Sign Up" />
                        </div>
                        :
                        <div>
                        <input className="form-control text-light btn sign-btn" type="submit" onClick={handleSubmit}  value="Sign in" />
                        </div>
                    }
                </div>
            </div>



          </form>
        </div>
         
             
      </div>
 
    </div>
    </section>
    );
};

export default Login;