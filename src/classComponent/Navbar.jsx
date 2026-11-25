import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Navbar extends Component {
  constructor(){
    super()
    this.state={
      search:""
    }
  }
 postSearch = (e) => {
  e.preventDefault();
  this.props.search(this.state.search);
};
  render() {
    return (
        <>
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-light background fixed-top ">
          <div className="container-fluid">
            <NavLink className="navbar-brand text-light"  to="/" onClick={()=>this.props.search("")}>
              All
            </NavLink>
            <button
              className="navbar-toggler border-light border-light border-3"
              type="button"
              data-bs-toggle="collapse"
             data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="bi bi-list text-light fs-3"></i>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink
                    className="nav-link text-light active"
                    aria-current="page"
                    to="/Politics" onClick={()=>this.props.search("")}
                  >
                    Politics
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link text-light" to="/Crime" onClick={()=>this.props.search("")}>
                    Crime{" "}
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link text-light" to="/Education" onClick={()=>this.props.search("")}>
                    Education{" "}
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link text-light" to="/Science" onClick={()=>this.props.search("")}>
                    Science{" "}
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link text-light" to="/Techonology" onClick={()=>this.props.search("")}>
                    Techonology{" "}
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link text-light" to="/Sport" onClick={()=>this.props.search("")}>
                    Sport{" "}
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link text-light" to="/Cricket" onClick={()=>this.props.search("")}>
                    Cricket{" "}
                  </NavLink>
                </li>
                <li className="nav-item dropdown">
                  <NavLink
                    className="nav-link dropdown-toggle text-light"
                    to="/Other"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false" onClick={()=>this.props.search("")}
                  >
                    Other
                  </NavLink>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <NavLink className="dropdown-item" to="/EnterTainment" onClick={()=>this.props.search("")}>
                        EnterTainment
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-item" to="/Economics" onClick={()=>this.props.search("")}>
                        Economics
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-item" to="/World" onClick={()=>this.props.search("")}>
                        World
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-item" to="/India" onClick={()=>this.props.search("")}>
                        India
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-item" to="/Jokes" onClick={()=>this.props.search("")}>
                        Jokes
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-item" to="/Mahakumbh" onClick={()=>this.props.search("")}>
                        Mahakumbh
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <NavLink
                    className="nav-link dropdown-toggle text-light"
                    to="/Other"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false" 
                  >
                    Language
                  </NavLink>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <button className="dropdown-item" onClick={()=>this.props.getLanguage("hi")} >
                        Hindi
                      </button>
                    </li>
                    <li>
                      <button className="dropdown-item" onClick={()=>this.props.getLanguage("en")} >
                        English
                      </button>
                    </li>
        
                  </ul>
                </li>
               
              </ul>
<form className="d-flex" onSubmit={this.postSearch}>
  <input
    className="form-control me-2"
    type="search"
    placeholder="Search"
    aria-label="Search"
    value={this.state.search}
    onChange={(e) => this.setState({ search: e.target.value })}
  />

  <button className="btn btn-outline-light" type="submit">
    Search
  </button>
</form>
            </div>
          </div>
        </nav>
      </div>
    </>
    )
  }
}
