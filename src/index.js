import React from "react";
import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
const timeNow = new Date().getHours();

const morning = { color: "red" };
const afternoon = { color: "green" };
const evening = { color: "blue" };

function Greeting() {
  if (timeNow >= 12 && timeNow < 18) {
    return (
      <h1 className="heading" style={afternoon}>
        Good Afternoon
      </h1>
    );
  } else {
    if (timeNow > 18 && timeNow < 24) {
      return (
        <h1 className="heading" style={evening}>
          Good Evening
        </h1>
      );
    }
    return (
      <h1 className="heading" style={morning}>
        Good Morning
      </h1>
    );
  }
}

const greeting = Greeting();

root.render(<h1 className="heading">{greeting}</h1>);
