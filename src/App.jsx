import { useState,useEffect } from "react";

const Card = ({ title }) => {
   const [hasLiked , setHasLiked] = useState(false);

   useEffect(()=> {
    console.log(`${title} has been liked: ${hasLiked}`);
   });


  return (
    <div  className="card">
      <h2>{title}</h2>

      <button onClick={() => setHasLiked(!hasLiked)}>{hasLiked ? '❤️':'🤍'}</button>
    </div>
  );
};

const App = () => {
 
  return (
    <div className="card-container">
      <Card title="Interstellar" reting="{5}" iscool="{true}" />
      <Card title="Death Note" />
      <Card title="Fast and Furious" />
    </div>
  );
};


export default App;
