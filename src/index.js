import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import theme from './assets/theme';

import App from './App';
import store from './store';

import './assets/css/index.less'
import 'antd/dist/antd.css'
import 'normalize.css'

// @ => src: webpack
// 问题: react脚手架隐藏webpack
// 解决一: npm run eject 暴漏出来webpack
// 解决二: craco => create-react-app config

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <Suspense fallback='loading'>
            <ThemeProvider theme={theme}>
                <HashRouter>
                    <App />
                </HashRouter>
            </ThemeProvider>
        </Suspense>
    </Provider>
);

