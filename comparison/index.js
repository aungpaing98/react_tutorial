// Create h1 element with class 'header' in JSX
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<h1 className="header">JSX to create new DOM element</h1>);

//  Create h1 element with vanilla Javascript
// Create h1 element
const h1 = document.createElement("h1");
h1.textContent = "Vanilla JS to create new DOM Element";
h1.className = "header";
console.log(h1);
document.getElementById("root").append(h1);
