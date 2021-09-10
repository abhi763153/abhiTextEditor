import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

export default function Navbar(props) {

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        {/* <Link className="navbar-brand" to="/">{props.tittle} </Link> */}
        <a className="navbar-brand" href="">{props.tittle} </a>

         
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">

          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="">Home</a>
            </li>

            {/* <li className="nav-item">
              <a className="nav-link" href="/about">{props.aboutUs}</a>
            </li> */}
            
            {/* <li className="nav-item">
              <a className="nav-link" href="/">Service </a>
            </li> */}
          </ul>

          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>

          <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'} mx-3`}>
              <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
              <label className="form-check-label " htmlFor="flexSwitchCheckDefault">DarkMode</label>
          </div>
        </div>
      </div>
    </nav>
  );
}


// Set props types
Navbar.propTypes = {
  tittle: PropTypes.string,
  aboutUs: PropTypes.string,
  mode: PropTypes.string
};

// // set default props types
// Navbar.defaultProps = {
//   tittle: "DefaultName",
//   aboutUs: "DefaultAbout",
// };

// // Required place
// Navbar.propTypes = {
//   tittle: PropTypes.string.isRequired,
//   aboutUs: PropTypes.string.isRequired,
// };

