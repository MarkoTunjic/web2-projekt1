import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './containers/App/App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from "@auth0/auth0-react";
import configData from "./config.json";
import ClientsContextProvider from './store/ClientsContext';
import PrincipalContextProvider from './store/Principalcontext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);



const providerConfig = {
  domain: configData.domain,
  clientId: configData.clientId,
  audience: configData.audience,
  redirectUri: window.location.origin,
  useRefreshTokens: true
};

root.render(

  <React.StrictMode>
    <Auth0Provider {...providerConfig}>
      <ClientsContextProvider>
        <PrincipalContextProvider>
          <App />
        </PrincipalContextProvider>
      </ClientsContextProvider>
    </Auth0Provider>
  </React.StrictMode >
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
