import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { awaitElement } from "./utils";
import './index.css'


async function main() {
  // EDIT THIS TO INSERT CONTAINER IN THE RIGHT SITE
  const parent = await awaitElement('#root');
  const container = document.createElement("div");
  parent.appendChild(container)

  insertElement(App, container)
}


async function loadCSS () {
  const style = GM_getResourceText('css')
  GM_addStyle(style)
}


async function insertElement(Element: React.ComponentType, container: HTMLElement) {
    const root = createRoot(container);
    root.render(
        <React.StrictMode>
            <Element />
        </React.StrictMode>
    );
}

document.addEventListener('DOMContentLoaded', () => {
  main()
  loadCSS()
});