import React from 'react';
import WebBrowser from "./WebBrowser";
import NavBar from "../common/NavBar";
import Footer from "../common/Footer";


export default function WebBrowserPage(props) {
    return (
        <div>
            <NavBar/>
            <header><h1>Popular web browsers</h1></header>
            <div>
                {props.webBrowserList.map(i => <WebBrowser {...i}/>)}
            </div>
            <Footer/>
        </div>
    )
}