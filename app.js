const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Hi, I am H1 Tag"),
    React.createElement("p", {}, "Hi, I am p Tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Hi, I am H1 Tag"),
    React.createElement("p", {}, "Hi, I am p Tag"),
  ])
);

// const heading = React.createElement(
//   "h1",
//   { className: "heading", id: "head" },
//   "Hello from React JS !!!"
// );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
console.log(parent);
