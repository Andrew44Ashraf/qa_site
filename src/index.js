import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './navbar';
import Sidebar from './sidebar';


ReactDOM.render(
    <Navbar active="Home"/>, 
    document.getElementById("navbar")
);

ReactDOM.render(
    <Sidebar/>, 
    document.getElementById("sidebar")
);