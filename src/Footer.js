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
      >
        Alana Jackson
      </a>
      , with
      <a
        href="https://github.com/Elsabordeaux/Plus-project-weather-app"
        target="_blank"
        rel="noreferrer"
      >
        GitHub
      </a>
      , website hosted on{" "}
      <a
        href="https://alanas-weather-project.netlify.app/"
        target="_blank"
        rel="noreferrer"
      >
        Netlify
      </a>
    </footer>
  );
}
