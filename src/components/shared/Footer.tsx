import React from "react";

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="text-center text-white">
      <div
        className="text-center p-4 w-full"
        style={{ backgroundColor: "#111827" }}
      >
        © {year} Copyright
        <a className="bold" href="https://tailwind-elements.com/">
          {" "}
          Jaime Ferreira
        </a>
      </div>
    </footer>
  );
};
