import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="Footer">
      Built by
      <a
        href="https://github.com/Elsabordeaux"
        target="_blank"
        rel="noreferrer"
        rel="noopener"
      >
        Alana Jackson
      </a>
      , with
      <a
        href="https://github.com/Elsabordeaux/Plus-project-weather-app"
        target="_blank"
        rel="noreferrer"
        rel="noopener"
      >
        GitHub
      </a>
      , website hosted on{" "}
      <a
        href="https://alanas-weather-project.netlify.app/"
        target="_blank"
        rel="noreferrer"
        rel="noopener"
      >
        Netlify
      </a>
    </footer>
  );
}
