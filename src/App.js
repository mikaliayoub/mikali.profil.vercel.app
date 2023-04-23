import Footer from "./components/Footer";
import React from "react";
import './App.css';
import {Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Formations from './components/Formations';
import Projets from "./components/Projets";
import Experiences from "./components/Experiences";
import { Card } from 'primereact/card';
import 'bootstrap/dist/css/bootstrap.min.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import Profilepic from "./components/Profilepic";
import Certification from "./components/Certification";

function App() {
  return (
    <div>
    <BrowserRouter>
      <div>
      <header className="header">
          <Profilepic />
          <h1>Mikali Ayoub</h1>
          <h2>Etudiant a l' EMSI (4eme année IIR)</h2>
        </header>
      </div>
      <nav className="navbar navbar-expand-lg " >
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link " >
              Accueil
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/formations" className="nav-link">
                Formations
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/experiences" className="nav-link">
                Expériences
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/project" className="nav-link">              
                Projets
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/certifications" className="nav-link">              
                Certifications
              </Link>
            </li>
          </ul>
        </nav>
        <div className="container mt-4" >
          <Routes>
            <Route exact path="/" element={<Accueil />} />
            <Route path="/formations" element={<Formations />} />
            <Route path="/experiences" element={<Experiences />} />
            <Route path="/project" element={<Projets />} />
            <Route path="/certifications" element={<Certification />} />
          </Routes>
        </div>
    </BrowserRouter>
       <Footer/>
       </div>
  );
}
function Accueil() {
  return (
    <section className="section"  >
      <Card title="Mikali Ayoub" style={{backgroundColor :"#0090a3",color : "black"}}>
        <p className="m-2" style={{color : "white"}}>
        Je m'appelle Mikali Ayoub, étudiant en cycle d'ingénieur spécialisé dans la filière développement et réseau informatique. 

        Je suis passionné par les technologies de l'information et de la communication et je suis heureux de pouvoir partager avec vous aujourd'hui mon parcours et mes projets.  

        </p>

        <p className="m-2" style={{color : "white"}}>
        Au cours de mes études, j'ai acquis de solides connaissances dans les domaines de la programmation, des réseaux informatiques, de la sécurité informatique et du développement web. 

        J'ai également pu mettre en pratique ces compétences à travers divers projets en groupe et individuels.        

        </p>

        <p className="m-2" style={{color : "white"}}>
        En dehors de mes études, j'aime me tenir au courant des dernières tendances et technologies dans le domaine de l'informatique, et j'ai participé à plusieurs hackathons et événements de programmation pour élargir mes horizons.        
        
        </p>

        <p className="m-2" style={{color : "white"}}>
        Mon objectif à long terme est de devenir un expert en développement et réseau informatique, et de contribuer à la création de solutions innovantes pour répondre aux défis technologiques de notre époque.        
        
        </p>

        
      </Card>
    </section>
  );
}

export default App;
