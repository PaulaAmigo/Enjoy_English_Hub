import "../lessonsByLevel.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function LessonsByLevel() {

return (
    <>
<div className="header">

<header className="headerInicio">

<img className="logo" src="../img/logo.png" alt="" />


<a>
            <Link to="/" className="Inicio">
              Home
            </Link>
          </a>
          
          <a>Login</a>
          <a>Sign up</a>
          
          <a>Contact us</a>
          <a>About us</a>
         
</header>
<hr />
</div>
<div className="buttonsLevel">
    <button className="A1">A1</button>
    <button className="A2">A2</button>
    <button className="B1">B1</button>
    <button className="B2">B2</button>
    <button className="C1">C1</button>
    <button className="C2">C2</button>
</div>
<footer>
    <img className="engageLevel" src="../img/TeacherLetters.png"/>
</footer>
</>
)
};
export default LessonsByLevel;