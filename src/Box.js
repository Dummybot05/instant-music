import './Box.css'
import { useState } from 'react'

function Box(props) {
  var aud = props.az;
  var [svg, setSvg] = useState("play.svg");

  const handleMusic = () => {
     if(aud.paused) {
        aud.play();
        setSvg('pause.svg');
     } else {
        aud.pause();
        setSvg('play.svg')
     }
   }

  return (
     <>
       <div className="container">
         <div className="bxsize">
           <img src="audio.png" className="audio" alt="playImage" />
           <b>{props.ay.slice(0,20)}...</b>
           <small>▶• ılıılıılıılıılıılı</small>
           <div className="playpause" style={{backgroundColor:'#f1f1f1'}} >
    		<img onClick={handleMusic} className="svgbtn" src={svg} alt="SvgImage" />
           </div>
         </div>
       </div>
     </>
  );
}

export default Box
