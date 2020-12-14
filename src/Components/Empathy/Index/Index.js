import React from 'react';
import BackgroundResearch from '../BackgroundResearch/BackgroundResearch';
import Dimensions from '../Dimensions/Dimensions';

import Introduction from '../Introduction/Introduction';
import Report from '../Report/Report';
import Scores from '../Scores/Scores';

const index = () => {
    return (
        <div >
            <Introduction></Introduction>
            <BackgroundResearch></BackgroundResearch>
            <Dimensions></Dimensions>
            <Report></Report>
            <Scores></Scores>
            <footer className="my-3 px-5"style={{fontSize:'12px'}}>© {(new Date().getFullYear())} Centre of Strategic Mindset, All Rights Reserved</footer>
         </div> 
    );
};

export default index;