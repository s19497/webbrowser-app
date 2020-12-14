import React from "react";
import {render} from "react-dom";
import WebBrowserPage from "./components/mainpage/WebBrowserPage";
import webBrowserData from './data/web_browsers.json'

render(<WebBrowserPage webBrowserList={webBrowserData}/>, document.getElementById('root'))