import "../App.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function ModalTeacher(props) {
    return (
      <Modal
        {...props}
        className="modal"
        size="lg"
      >
        <Modal.Header >
          <Modal.Title id="contained-modal-title-vcenter">
            <h2>Lessons by level</h2>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
          <p>
            Here you would be able to find all the classes by level, choe¿ose the roght one for you student.
          </p>
        </Modal.Body>
        <Modal.Footer>
        <Link to="/Teacher/LessonsByLevel" className="Level">
          <Button className="" onClick={props.onHide}>Let's go
    
    </Button>
    </Link>
    <Button onClick={props.onHide}>Close
    
    </Button>
        </Modal.Footer>
      </Modal>
    );
  }
function Teacher() {

    const [modalShow, setModalShow] = React.useState(false);

return (
<div>
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
<Button className="buttonLevel" onClick={() => setModalShow(true)}>
<img className="teacher" src="../img/LessonLevel.png"/>

      </Button>
      <ModalTeacher
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    
    <img className="learner" src="../img/LessonCateg.png" />
    <img className="teacher" src="../img/LessonGram.png"/>
    <img className="teacher" src="../img/warmup.png"/>
    </div>

<footer>
    <img className="engage" src="../img/TeacherLetters.png"/>
</footer>
</div>
)
};
export default Teacher;