import React from "react";
import { Route, Routes } from "react-router-dom";

import './App.css';

import HomePage from './components/homePage';
import ExamplePage from "./components/examplePage";
import CodeMirrorPage from "./components/codeMirrorPage"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/click' element={<ExamplePage />}></Route>
        <Route path='/cm' element={<CodeMirrorPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
