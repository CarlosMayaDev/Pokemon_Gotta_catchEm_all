import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store"
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.render(
      <Auth0Provider 
      domain="dev-80ffq6zxp81e1s6s.us.auth0.com"
      clientId="CpcCLdGvPH3O25AbUDJdiYoysOacaMEa"
      authorizationParams={{
        redirect_uri: "http://localhost:3000/home"
      }}>
        <Provider store={store}>
          <BrowserRouter>
            <React.StrictMode>
              <App />
            </React.StrictMode>
          </BrowserRouter>
        </Provider>
      </Auth0Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
