const root = ReactDOM.createRoot(document.getElementById("root"));

function NavBar() {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src="./react.jpg" alt="" width="50" height="50" />
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <div className="container">
      <h1 className="d-flex justify-content-center py-3">React JS</h1>
      <h4>Main Features of React</h4>
      <ul>
        <li>Composable</li>
        <li>JSX</li>
        <li>Declarative</li>
      </ul>

      {/* Footer Element  */}
      <div className="container-fluid bg-dark text-center text-white p-3">
        Created by LTE Member @ 2022, All right reserverd
      </div>
    </div>
  );
}

function Page() {
  return (
    <div>
      <NavBar />
      <Hero />
    </div>
  );
}

root.render(<Page />);
