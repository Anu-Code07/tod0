import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { RecoilRoot } from "recoil";
import { SnackbarProvider, useSnackbar } from "notistack";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RecoilRoot>
      <SnackbarProvider maxSnack={2}>
        <App />
      </SnackbarProvider>
    </RecoilRoot>
  </React.StrictMode>
);
