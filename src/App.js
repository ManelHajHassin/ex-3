import './App.css'
import Review from './components/Reviews';
import Result from './components/Result';
import img_bolt from "./assets/bolt-solid.svg";
import img_brain from "./assets/brain-solid.svg";
import img_comment from "./assets/comment-solid.svg";
import img_eye from "./assets/eye-solid.svg";
function App() {
  return (
    <div className="App">
      <div className='left-side'>
        <Result
          
          average={"76"}
          mention={"Great"}
          information={"You scored higher than 65% of the people who have taken these teste"}
        />
      </div>
      <div className='right-side'>
        <p className='title-right-side'>Summary</p>
        <div className='reviews'>
        <Review 
         logo={img_bolt}
         title={"Reaction"}
         note={"80"}
         color="rgb(255,0,0)"
         bgcolor="rgb(255,0,0,0.1)"
       />
       <Review
         logo={img_brain}
         title={"Memory"}
         note={"65"}
         color={"rgb(255,210,0"}
         bgcolor={"rgb(255,210,0,0.1)"}
       />
       <Review
         logo={img_comment}
         title={"Verbal"}
         note={"61"}
         color={"rgb(0,255,20"}
         bgcolor={"rgb(0,255,20,0.1)"}
       />
       <Review
         logo={img_eye}
         title={"Visual"}
         note={"72"}
         color={"rgb(20,0,230"}
         bgcolor={"rgb(20,0,230,0.1)"}
       />
        </div>
      
       <button className='btn-continue'>Continue</button>
      </div>
    </div>
  );
}
export default App;
