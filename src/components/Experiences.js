import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Experience extends Component {

  render() {
   return (
    <section style={{ padding: '10vh 20vh 10vh 20vh', textAlign: 'left' }}>
    <div className="shadow p-3 mb-3 bg-white rounded card"  >
      <div className="card-body" style={{backgroundColor : 'linear-gradient(to right, #00bcd4,#008080, #4a148c)' ,color:"white"}}>
        <div className="mb-3 card-title h5" >
        <a href="https://eysi.net/en" style={{color: '#000000'}}>Eysi</a>
        </div>
        <div className="mb-0  card-subtitle h6">
          Stagiaire
        </div>
        <div className="mb-0  card-text">
          PHP - Laravel
        </div>
        <p className="card-text">
          Septembre 2022 - Octobre 2022
        </p>
      </div>
    </div>
    <div className="shadow p-3 mb-3 bg-white rounded card"  >
      <div className="card-body" style={{backgroundColor :"#008080" ,color:"white"}}>
        <div className="mb-3 card-title h5" >
        <a href="https://www.aumarrakech.ma/appel" style={{color: '#000000'}}>Agence urbaine de Marrakech</a>
        </div>
        <div className="mb-0  card-subtitle h6">
          Stagiaire
        </div>
        <div className="mb-0  card-text">
          C - C++
        </div>
        <p className="card-text">
          Septembre 2021 - Octobre 2021
        </p>
      </div>
    </div>
  </section>
  
  
);
  }
}

export default Experience;
