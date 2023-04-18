// Manipulate the HTML DOM using Javscript
// const heading = document.createElement("h1");
// heading.innerHTML = "Namaste Everyone";
// const root = document.getElementById("root");
// root.appendChild(heading);

// Manipulate the HTML DOM using React

// using React.createElement for creating a tag
let h1 = React.createElement(
  "h1",
  { className: "my-class", id: "myID", xyz: "abc" },
  "Hello world from REACT"
);
console.log(h1);
// using RootDom.createRoot for creating a root
let root = ReactDOM.createRoot(document.getElementById("root"));
// render function to put the tag inside the root
root.render(h1);

// if you have to create nested chidren
const p1 = React.createElement("p", {}, "first para tag");
const p2 = React.createElement("p", {}, "second  para tag");
const parent1 = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "p",
    { xyz: "abc" },
    React.createElement(
      "span",
      { className: "my-class", id: "myID", xyz: "abc" },
      "This is my tag"
    )
  )
);
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "p",
    { xyz: "abc" },
    React.createElement(
      "span",
      { className: "my-class", id: "myID", xyz: "abc" },
      [p1, p2]
    )
  )
);
// here p1 and p2 are sibling tags
//parent is an object that gets created and while doing root.render(parent) the parent becomes a  tag and gets rendered to dom
console.log(parent);
root.render(parent);

// So we need jsx to write react so that we do not need to write nested tags using React.createElement
// jsx is not the only way to write react we  can write it using the React.createElement and do nesting of it and render it in dom using root.render(parent)
