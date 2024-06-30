import React from 'react';

const Navbar = ({ setCategory }) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div className="container-fluid">
          <span className="navbar-brand"><span className="badge bg-light text-dark">NewsBuzz</span></span>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <button className="nav-link active btn btn-link" aria-current="page" onClick={() => setCategory("general")}>General</button>
              </li>
              <li className="nav-item">
                <button className="nav-link active btn btn-link" aria-current="page" onClick={() => setCategory("technology")}>Technology</button>
              </li>
              <li className="nav-item">
                <button className="nav-link active btn btn-link" aria-current="page" onClick={() => setCategory("business")}>Business</button>
              </li>
              <li className="nav-item">
                <button className="nav-link active btn btn-link" aria-current="page" onClick={() => setCategory("health")}>Health</button>
              </li>
              <li className="nav-item">
                <button className="nav-link active btn btn-link" aria-current="page" onClick={() => setCategory("sports")}>Sports</button>
              </li>
              <li className="nav-item">
                <button className="nav-link active btn btn-link" aria-current="page" onClick={() => setCategory("entertainment")}>Entertainment</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
