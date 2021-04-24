import React from "react";
import Link from "next/link";

const Navbar = (props) => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-dark bg-primary">
        <div className="container-fluid">
          <Link href="/">
            <a className="navbar-brand">Ride Share</a>
          </Link>
        </div>
      </nav>
    </React.Fragment>
  );
};

export { Navbar };
