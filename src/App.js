import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap';
import Sidebar from './Components/sidebar'
import Body from './Components/Body'


let test = prompt("Hello, welcome to our page. Enter your name:", " ")

const carts = () => {
  alert('Welcome to our shop')
}

function App() {
  return (
    <>
    
    <button onClick={carts} style={{textAlign:'center', marginLeft:'550px', marginTop:'50px', background:'hotpink', borderRadius:'50px', fontSize:'2em', boxShadow:'5px 10px', borderColor:'none'}}>Kasenagirl Online</button>
    <div className="container" style={{fontFamily:'Inconsolata'}}>
      <div className="row">
        <div className="col-2">
        <Sidebar/>
        </div>
        <div className="col-10">
        <Body/>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
