import React,{ Fragment } from "react";
import {
    Form,
    FormControl,
    Button
  } from 'reactstrap';
function Header() {
  return(
    <Fragment>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Features</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Pricing</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown link
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                </li>
                </ul>
            </div>
            
            <form class="form-inline">
               <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
               <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
            
            <div style={{ paddingTop:"fixed", marginLeft:"5px"}}>
              <button type="button" id="dropdownMenu1" data-toggle="dropdown" class="btn btn-outline-secondary dropdown-toggle">Login <span class="caret"></span></button>
            </div>
        </nav>
      </div>      
    </Fragment>
  )   
}
export default Header;

// log in in search bar https://www.codeply.com/go/XefCTinzkY/bootstrap-4-navbar-with-login-form