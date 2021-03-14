import  React from 'react';
import ReactDOM from 'react-dom';
import PrimeraApp from "./PrimeraApp";
import CounterApp from "./CounterApp";
import './index.css'

const divRoot =  document.querySelector('#root');

// document.body.append(saludo)

ReactDOM.render( <PrimeraApp saludo = 'Hola' subtitulo = 'Movie' /> , divRoot );
// ReactDOM.render( <CounterApp value = { 0 } /> , divRoot );