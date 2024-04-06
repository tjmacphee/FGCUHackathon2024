import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles.css';

function App() {
  return (
    <div className="container text-center p-0 mw-100">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid px-5 py-2">
          <a className="navbar-brand" href="/">Althrex</a>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">HOME</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/vendor">VENDOR</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/products">PRODUCTS</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/info">INFO</a>
              </li>
            </ul>
            <form className="d-flex">
              <button className="btn bg-dark" type="submit">Sign Up</button>
            </form>
          </div>
        </div>
      </nav>

      <header className="py-5 mb-5">
        <h1>Althrex</h1>
        <p>Innovate, Optimize, Sustain</p>
      </header>

      <section className="icon-section py-3">
        <div className="row justify-content-center">
          <div className="col-6 col-md-3">
            <div className="circle-icon">
              {/* Insert SVG or icon for the first feature */}
            </div>
            <p>Feature 1</p>
          </div>
          <div className="col-6 col-md-3">
            <div className="circle-icon">
              {/* Insert SVG or icon for the second feature */}
            </div>
            <p>Feature 2</p>
          </div>
          <div className="col-6 col-md-3">
            <div className="circle-icon">
              {/* Insert SVG or icon for the third feature */}
            </div>
            <p>Feature 3</p>
          </div>
          <div className="col-6 col-md-3">
            <div className="circle-icon">
              {/* Insert SVG or icon for the fourth feature */}
            </div>
            <p>Feature 4</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
