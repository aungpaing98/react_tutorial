const root = ReactDOM.createRoot(document.getElementById("root"));

const theme = "dark";

// const JSXElement = <h1 region="myanmar">Hello World</h1>;

// root.render(JSXElement);
// console.log(JSXElement);
// console.log(JSXElement.props);
// const { region, children } = JSXElement.props;
// console.log("Element inside tag : ", children);
// console.log("Tag attributes : ", region);

const JSXComponent = (props) => {
  const { name, age, hobbies, children } = props;
  console.log("Props inside Component : ", props);
  console.log("Name : ", name);
  console.log("Age  :", age);

  console.log("Type of name : ", typeof name);
  console.log("Type of age : ", typeof age);

  console.log("Element inside tag : ", children);
  return <h1 lenght="40">{children}</h1>;
};

// console.log(JSXComponent);
// const JSXElement = <JSXComponent />;
// const JSXElement = JSXComponent();
// console.log(JSXElement);
// console.log(JSXElement.props);

// root.render(JSXComponent());

// Pass Argument to react functional component
// root.render(<JSXComponent name="aung paing">age = 24</JSXComponent>);

// Pass different data types to React Functional Component
// root.render(
//   <JSXComponent name="aung paing" age={24} hobbies={["basketball", "jogging"]}>
//     Welcome to the React
//   </JSXComponent>
// );

// Using ternary operator inside HTML
root.render(
  <JSXComponent name="aung paing" age={24} hobbies={["basketball", "jogging"]}>
    {theme === "dark" ? "Dark Theme" : "Light Theme"}
  </JSXComponent>
);
