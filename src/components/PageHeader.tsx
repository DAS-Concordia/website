import React from "react";

const PageHeader = ({ title, description, children }) => {
  return (
    <header className="hero shadow--lw">
      <div className="container">
        <h1 className="hero__title">{title}</h1>
        {description && <p className="hero__subtitle">{description}</p>}
        <div>{children}</div>
      </div>
    </header>
  );
};

export default PageHeader;
