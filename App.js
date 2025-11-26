const heading = React.createElement(
  "h1",
  { id: "heading" },
  "My name is Sid2.0"
);
console.log(heading, "HEADING");
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root, "ROOT");
root.render(heading);
