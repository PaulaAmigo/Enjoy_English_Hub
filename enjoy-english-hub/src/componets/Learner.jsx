import "../App.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Learner() {

return (
    <>
    <header className="headerInicio">
<img className="logoLetras" src="../img/letrasLogo.png" alt="" />
<a>
            <Link to="/" className="Inicio">
              Home
            </Link>
          </a>
          
          <a href="">Login</a>
          <a href="">Sign up</a>
          
          <a href="">Contact us</a>
          <a href="">About us</a>
</header>
<hr />
<div className="buttonInicio">
    <img className="learner" src="../img/findyourleel.png"/>
    <img className="learner" src="../img/courses.png" />
    <img className="learner" src="../img/games.png"/>
    <img className="learner" src="../img/online.png"/>
    </div>
    <footer>
    <img className="start" src="../img/learnersletters.png"/>
</footer>
</>
)
};
export default Learner;