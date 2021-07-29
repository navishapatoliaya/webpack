require('file-loader?name=[name].[ext]!./index.html');

import React from 'react';
import ReactDom from 'react-dom';
import {App} from './App';
import {store} from './store';
import { Provider } from 'react-redux';
import  './App.scss';
import {configureFakeBackend} from './helpers';
configureFakeBackend();



ReactDom.render(
    <Provider store={store}>
         <App />,
    </Provider>  , 
    document.getElementById('app')
);