import "./wdyr.js";
import React from "react";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { loadServer, DevTools } from "jira-dev-tool";
//务必在jira-dev-tool后面引入
import "antd/dist/antd.less";
import ReactDOM from "react-dom";
import { AppProviders } from "context";

loadServer(() =>
  ReactDOM.render(
    <React.StrictMode>
      <Propfiler id={'Root App'} phases={['mount']}>
        <AppProviders>
          <DevTools />
          <App />
        </AppProviders>
      </Propfiler>
    </React.StrictMode>,
    document.getElementById("root")
  )
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
