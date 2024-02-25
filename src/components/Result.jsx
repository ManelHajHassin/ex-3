

import './Result.css';


function Result ({average,mention,information}){
    return(
     <div className='result'>
        <h2  className='title'>Your Result</h2>
        <div className='average-of-100'>
            <h1 className='average'>{average}</h1>
            <p className='ofhundred'>of 100</p>
        </div>
        
        <h2 className='mention'>{mention}</h2>
        <h4 className='details'>{information}</h4>
     </div>
    )
}
export default Result