import React from "react";
import "./App.css";
import {Routes, Route} from "react-router-dom";
import FirstPage from "./componets/firstPage.jsx";
import Teacher from "./componets/teachers.jsx"
import Learner from "./componets/Learner.jsx"
import LessonLevel from "./componets/lessonsByLevel.jsx"


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<FirstPage />}></Route>
        <Route path="/Teacher" element={<Teacher />}></Route>
        <Route path="/Learner" element={<Learner />}></Route>
        <Route path="/Teacher/LessonsByLevel" element={<LessonLevel />}></Route>
      </Routes>
    </>
  );
}

export default App;
