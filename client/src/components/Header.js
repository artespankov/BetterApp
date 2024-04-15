import React, {Component} from "react";


class Header extends Component {
    render() {
        return (

     <nav>
    <div className="nav-wrapper">
      <a className="left brand-logo">
          BetterApp
      </a>
      <ul className="right">
          <li><a href="/surveys">Dashboard</a></li>
        <li><a href="/surveys/new">New Survey</a></li>
            <li><a href="/">Login With Google</a></li>
      </ul>
    </div>
  </nav>
        )

    }
}

export default Header;