import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';



function acima() {
  let rolar = 0;
  window.addEventListener("scroll", function (event) {
    let scroll = this.scrollY;
    rolar = scroll
  });


  const topo = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });	
  };
  if(rolar < 150){
    return (
      <>
      <div className="trinaguloM" onClick={topo}>
        <button className="top" onClick={topo} title="Subir"></button>
      </div>
  
    </>
    );
  }
  else{
    return (
      <>
      <div>
      </div>
  
    </>
    );
  }
 
}
function UpTop(){
  return(
    acima()
  );
}
export default UpTop;
