import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <>
      <footer
        className="bg-light text-center text-lg-start "
        style={{ marginTop: "6px" }}
      >
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2021 Copyright :
          <a className="text-dark" href="http://localhost:3000/">
            Dongy
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
