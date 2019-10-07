import './index.css';
import 'app/assets/scss/argon-design-system-react.scss';
import 'app/assets/vendor/font-awesome/css/font-awesome.min.css';
import 'app/assets/vendor/nucleo/css/nucleo.css';

import { GlobalStateProvider } from 'app/store';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

interface Props { };

ReactDOM.render(
    <BrowserRouter>
        <GlobalStateProvider>
            <App />
        </GlobalStateProvider>
    </BrowserRouter>
    , document.getElementById('root'));
