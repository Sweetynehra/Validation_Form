import React from 'react';
import './index.css';
import Success from './components/Success';
import Form from './components/Form';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form/>}>
          <Route path="/success" element={<Success />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);