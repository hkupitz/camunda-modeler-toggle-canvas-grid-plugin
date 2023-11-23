# Toggle Canvas Grid Plugin

[![Compatible with Camunda Modeler version 5.10+](https://img.shields.io/badge/Modeler_Version-5.10+-blue.svg)](#) [![Plugin Type](https://img.shields.io/badge/Plugin_Type-Styles-orange.svg)](#)

Adds a menu option as well as hotkey (_Ctrl + G_) to turn the visual canvas grid on and off.

## How to use

1. Download and copy this repository into the `plugins` directory of the Camunda Modeler.
2. Start the Camunda Modeler.
3. Toggle the visual canvas grid via the _Plugins_ menu option or the _Ctrl + G_ hotkey.

## Web Modeler Userscript

If you'd like to also disable the visual canvas grid in the Camunda Web Modeler, you can use the following userscript with a userscript manager like Violentmonkey.

```
// ==UserScript==
// @name         Disable Camunda Web Modeler Canvas Grid
// @version      1.0
// @description  Disables the visual canvas grid in the Camunda Web Modeler.
// @match        https://modeler.cloud.camunda.io/*
// @grant        GM_addStyle
// @run-at       document-end
// ==/UserScript==

GM_addStyle('.djs-container .layer-djs-grid { display: none; }');
```