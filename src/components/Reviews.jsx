
import "./Reviews.css";



function Review ({logo,title,note,bgcolor,color} ){
    return(
        <div className="review" style={{backgroundColor:bgcolor }}  >
            <div className="subject" style={{color:color}} >
                <img src={logo} alt="logo"></img>
                <p>{title}</p>
            </div>
            <div className="subject-result">
                 <p className="note">{note}</p>
                 <p className="of100" >/100</p>
            </div>
           
        </div>

    )

}
export default Review