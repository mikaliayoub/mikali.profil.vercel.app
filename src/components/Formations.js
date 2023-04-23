import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Formations extends Component {
  render() {
    return (
      <section style={{ padding: '10vh 20vh 10vh 20vh', textAlign: 'left' }}>
        <div className="shadow p-3 mb-3 bg-white rounded card" >
          <div className="card-body" style={{backgroundColor :"#635985" ,color:"white"}}>
            <div className="mb-4  card-title h5">
              Baccalaureat (SM)
            </div>
            <div className="mb-1 card-subtitle h6">
            <a href="https://www.institutionalbachir.com/" style={{color: '#000000'}}>Institution Al Bachir</a>
            </div>
            <p className="card-text" style={{color: "black"}}>
              2015 - 2018
            </p>
          </div>
        </div>
        <div className="shadow p-3 mb-3 bg-white rounded card"  >
          <div className="card-body" style={{backgroundColor :"#635985" ,color:"white"}}>
            <div className="mb-4 card-title h5" >
              Ingenieurie/Master (MIAGE)
            </div>
            <div className="mb-1  card-subtitle h6">
            <a href="https://www.emsi.ma/" style={{color: '#000000'}}>Ecole Maroccaine des sciences de l'ingenieur Marrakech (EMSI)</a>
            </div>
            <p className="card-text" style={{color: "black"}}>
              2018 - 
            </p>
          </div>
        </div>
        
      </section>
    );
  }
}

export default Formations;
