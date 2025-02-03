import React from 'react'
import ReactDOM from 'react-dom/client'

const heading=React.createElement("h1",{"id":"header"}," React Learning! 🦇");
const rootEl=ReactDOM.createRoot(document.getElementById("root"));

const anotherHeading=<h2 id='test'>This is JSX!🐎</h2>;
console.log(heading);
console.log(rootEl);
console.log(anotherHeading);
const conatiner=React.createElement("div",{"id":"container"},[heading,anotherHeading]);

rootEl.render(conatiner);
