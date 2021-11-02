import React from 'react';
import ReactDOM from 'react-dom';
import './components/style.css';
const app =  document.getElementById('root');
const submitInfo = function (){
   let nameUser = document.getElementById('nameUser').value;
   let emailUser = Document.getElementById('emailUser').value;
   if(nameUser === '' && emailUser === ''){
    alert('Ingrese todos los datos');
   }else{
    alert('se han guardado todos los datos');
   }
}
const Contenedor = function(){
  return(
    <div className='contenedor'>
      <h2>Completa los datos</h2>
      <form onSubmit={submitInfo}>
        <input type='text' placeholder='Ingresa tu nombre' id='nameUser'></input>
        <br/>
        <input type='text' placeholder='Ingresa tu correo' id='emailUser'></input>
        <br/>
        <button>Enviar</button>
      </form>
    </div>
  )
}
ReactDOM.render(
  <div>
    <Contenedor/>
  </div>, app
  );