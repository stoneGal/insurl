import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './components/App';

ReactDOM.render(<BrowserRouter><Route path="/"><App /></Route> </BrowserRouter> , document.getElementById('root'));
