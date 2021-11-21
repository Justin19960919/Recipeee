import "./navigation.css";


const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-color">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Recipee</a>
{/*  */}
        <button className="navbar-toggler"  data-bs-toggle="collapse" data-bs-target="#navbarText" type="button" aria-controls="navbarText" aria-expanded="false">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="/">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Search</a>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="/">Login</a>
            </li>
            <li className="nav-item ">
              <a className="nav-link active" aria-current="page" href="/register">Register</a>
            </li>
          </ul>
          {/* <span className="navbar-text">
            Navbar text with an inline element
          </span> */}

        </div>
      </div>
    </nav>
  );
}


export default Navigation;
