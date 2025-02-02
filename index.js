const heading=React.createElement("h1",{className: "heading",style: {color: "red"}},"Hellow React!");
const footer=React.createElement("h2",{className: "foorter",style: {color: "green"}},"Footer Content!");
const rootEl=ReactDOM.createRoot(document.getElementById("root"));
rootEl.render(heading);
console.log(heading);
rootEl.render(React.createElement("div",{className: "container"},[heading,footer]));
