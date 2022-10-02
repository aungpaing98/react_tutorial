const root = ReactDOM.createRoot(document.getElementById("root"));

function Hero() {
  return <h1>Hero Section</h1>;
}

function Footer() {
  return <h1>Footer Section</h1>;
}

const renderElement = <h1>Hello React</h1>;
// const renderElement = (
//   <div>
//     <h1>Hello React</h1>
//     <p>Welcome to LTE</p>
//   </div>
// );
// console.log(renderElement);

root.render(renderElement);
// root.render(<Hero />);
