import React from 'react';
import { render } from 'react-dom';

import App from './components/App';
import 'papercss/dist/paper.min.css';
import './css/style.css';

render(
    <App />, 
    document.getElementById('root')
);
