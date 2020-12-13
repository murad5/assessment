import React from 'react';
import { useHistory } from 'react-router-dom';
import img from '../../images/Picture1.png'
import './Reorient.css'

const questions= [
    {
        id:1,
        question: 'I can easily tune in, to sense how others are feeling at a given point of time. '
    },
    {
        id:2,
        question: 'I prepare myself by calming down my inner chatter for active listening, during conversations.'
    },
    {
        id:3,
        question: 'Intuitively, I can sense when someone is feeling awkward or hesitant.'
    },
    {
        id:4,
        question: 'During interactions, I find myself anticipating as to what is coming next. '
    },
    {
        id:5,
        question: 'I get those vibes when other person has something to say or talk about. '
    },
    {
        id:6,
        question: "Capturing cues of dissonance or disapproval come naturally to me."
    }
    ,
    {
        id:7,
        question: "I can sense if I am intruding others' world, even if they do not exhibit any emotions, openly. "
    },
    {
        id:8,
        question: "I am able to step into others' shoes and minds to gauge as to where are they coming from. "
    }
]

const Reorient = () => {
    const history = useHistory();

    const handleClick =() => {
      history.push("/reimagination");
    }
    return (
        <section>
        <div>
            <img src={img} width="100%" alt=""/>
        </div>
        <div className="container mt-5 border border-dark ">
         <div>
                <div className="row border-dark">
                  <div className="col-md-12 bg-light border border-dark " > <span className="text-uppercase">4. Reorient (Ability to Reorient)</span>- Recalibrating Own Approach ......  </div>
                </div>
                <div className="row">
                   <div className="text-center text-uppercase col border border-dark ">Rating</div>
                </div>
                <div className='row text-center text-uppercase'>
                    <div className="col border border-dark ">Not Demonstrated</div>
                    <div className="col border border-dark ">Early Awareness</div>
                    <div className="col border border-dark ">Selective appliation</div>
                    <div className="col border border-dark ">Well-Manifested</div>
                    <div className="col border border-dark ">Clear sttrength</div>
                </div>
                <div className='row text-center'>
                    <div className="col border border-dark">(ND)</div>
                    <div className="col border border-dark">(EA)</div>
                    <div className="col border border-dark">(SA)</div>
                    <div className="col border border-dark">(WM)</div>
                    <div className="col border border-dark">(CS)</div>
                </div>
                <div className='row text-center'>
                    <div className="col border border-dark"></div>
                    <div className="col border border-dark" style={{ backgroundColor:'#EEE309', width:'100px', height:'20px' }}></div>
                    <div className="col border border-dark"></div>
                    <div className="col border border-dark " ></div>
                    <div className="col border border-dark"></div>
                </div>
                <div className='row bg-dark ' >
                     <div  className='col text-center text-uppercase text-light'>Behavioural Inputs</div>
                </div>
                <div className='row border border-dark '>
                     <div className='col-md-6 border border-dark '></div>
                         <div className='row col-md-6 text-center '>
                                <div className="col border border-dark ">ND</div>
                                <div className="col border border-dark ">EA</div>
                                <div className="col border border-dark ">SA</div>
                                <div className="col border border-dark ">WM</div>
                                <div className="col ">CS</div>
                         </div>
                </div>
                {
                            questions.map(question =>(
                <div className="row">
                        
                             <div className="col-md-6 border border-dark "> {question.question} </div>
                           
                        
                   
                    <div className="col-md-6 border border-dark ">
                        <form className="row text-center p-1" action="">
                            <div className='col'>
                                 <input className='radio' type="radio" name="nd" id='1'/>
                            </div>
                            <div className='col'>
                                 <input className='radio' type="radio" name="nd" id='1'/>
                            </div>
                            <div className='col'>
                                 <input className='radio' type="radio" name="nd" id='1'/>
                            </div>
                            <div className='col'>
                                 <input className='radio' type="radio" name="nd" id='1'/>
                            </div>
                            <div className='col'>
                                 <input className='radio' type="radio" name="nd" id='1'/>
                            </div>
                        </form>
                    </div>
                          
                </div>
)) }
                <div className='row bg-dark ' >
                     <div style={{ width:'100px', height:'20px' }}  ></div>
                </div>
           
          </div>
         
        </div>
        <div className="container border border-dark my-5" style={{ height:'100px'}}>
              <p>Key Reflections</p>
          </div>
          <div className="container border border-dark my-5 " style={{ height:'100px'}}>
              <p>Key Actions</p>
          </div>
          <div className="container d-flex justify-content-end ">
                  <button className="btn btn-primary " onClick={handleClick}>Next</button>
              </div>
              <footer className="mt-5 px-5">© {(new Date().getFullYear())} Centre of Strategic Mindset, All Rights Reserved</footer>
    </section>
    );
};

export default Reorient;