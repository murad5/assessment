import React from 'react';
import img from '../../../images/table.jpg'

const Scores = () => {
    return (
        <section>
            <div className="container">
                <h3>Overall Empathy index – Interpretation of Scores</h3>
                <div className="text-center my-5">
                        <img src={img}  alt=""/>
                </div>
                <div>
                    <p>Please read following guidelines to make sense of your scores and devise your measures to enhance your empathy index. </p>
                    <p style={{fontWeight: 'bold' }}>You have got a score of <span className="text-info">147/ 200</span> as a combined total of EMPATHIC INDEX.</p>
                    <p>Let us understand what this score means for</p>
                    <div className="my-5">
                        <p><span className="text-info " style={{fontWeight: 'bold' }}>180-200 (90% to 100%)</span>  <span style={{fontWeight: 'bold' }}>: Level 5 =</span> You  understand, embody, and exemplify empathy, exceptionally well. You have the wherewithal to ‘role-model’ empathy in your context and be a champion. Keep up the good work but be wary of the empathy fatigue and its potential overuse, by actively asking this question, “Is there something getting overlooked or ignored in the garb of empathy”?</p>
                    </div>
                    <div className="my-5">
                        <p><span className="text-info" style={{fontWeight: 'bold' }}>140-179 (70% to 89%)</span> <span style={{fontWeight: 'bold' }}>: Level 4 =</span>  You often understand and demonstrate empathic concern at a cognitive as well as emotional level but will do well to enhance your effectiveness by identifying opportunities for real application.  </p>
                    </div>
                    <div className="my-5">
                        <p> <span className="text-info" style={{fontWeight: 'bold' }}>100-139 (50% to 69%) </span> <span style={{fontWeight: 'bold' }}> : Level 3 =</span>  You show selective evidence of understanding and practising empathy, but your record is sporadic, and consistency is missing. Having understood the power of empathy, you will do well to increase your attempts of applying empathy and creating a positive lasting residue. </p>
                    </div>
                    <div className="my-5">
                        <p><span className="text-info" style={{fontWeight: 'bold' }}>60-99 (30% to 49%)</span> <span style={{fontWeight: 'bold' }}>: Level 2 =</span>  There is little evidence to suggest that your tryst with empathy has begun, yet. It may be a good idea to explore, if there are any contradictions in your mind as regards the understanding as well as the potential of empathy, as an instrument of transformation and impact.</p>
                    </div>
                    <div className="my-5">
                        <p><span className="text-info" style={{fontWeight: 'bold' }}>01-59 (0% to 30%)</span> <span style={{fontWeight: 'bold' }}>: Level 1 =</span>  Your scores suggest a huge gap in understanding empathy and a missing opportunity in appreciating its impact on the people that you lead or may lead in future, in a given context. The sooner you begin this journey, the better you will get at the game of leading. </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Scores;