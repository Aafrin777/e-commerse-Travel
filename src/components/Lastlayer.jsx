import React from 'react'
import "./Lastlayer.css";

    function Lastlayer ({ text1, text2, heading, imageSrc }) {
      return (
        <div className="layer">
          <img src={imageSrc} alt="" />
          <h4>{heading}</h4>
              <p><small>{text1}</small></p>
              <p><small>{text2}</small></p>
          </div>
       
      );
    }
    
    function App() {
      return (
        <>
        <div className="layer-headline">
<h2>Connect with other travelers in our community</h2>
        </div>
        <div className="layer-container">
          <Lastlayer  heading ="India"  text1= 'Travel community'  text2='155,073 travellers 'imageSrc="last1.jpeg" />
          <Lastlayer  heading ="India"  text1= 'Travel community'  text2='155,073 travellers 'imageSrc="last2.webp" />
          <Lastlayer  heading ="India"  text1= 'Travel community'  text2='155,073 travellers 'imageSrc="last3.jpeg" />
        </div>
    </>
  )
}

export default App;

