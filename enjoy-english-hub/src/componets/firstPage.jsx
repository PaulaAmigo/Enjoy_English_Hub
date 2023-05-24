import "../App.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function FirstPage() {
  return (
    <div>
      <header>
        <img className="logoLetras" src="../img/letrasLogo.png" alt="" />
      </header>
      <hr />
      <div className="buttonInicio">
        <Link to="/Teacher" className="secondpage">
          <img className="teacher" src="../img/Teachers.png" />
        </Link>
        <Link to="/Learner" className="thirdpage">
        <img className="learner" src="../img/learners.png" />
        </Link>
      </div>
      <footer>
        <img className="expand" src="../img/Expand.png" />
      </footer>
      <hr />
      
    </div>
  );
}
export default FirstPage;
