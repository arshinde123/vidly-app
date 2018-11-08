import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

class Navbar extends Component {
    state = { navCollapsed : false }
    handleToggle = () => {
        this.setState({ navCollapsed: !this.state.navCollapsed });
    }
    render() { 
        const { user } = this.props;
        const { navCollapsed } = this.state;
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/" >Vidly</Link>
                <button onClick={this.handleToggle} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={ navCollapsed ? "navbar-collapse" : "collapse navbar-collapse" } id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink onClick={this.handleToggle} className="nav-link" to="/movies">Movies</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink onClick={this.handleToggle} className="nav-link" to="/customers">Customers</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink onClick={this.handleToggle} className="nav-link" to="/rentals">Rentals</NavLink>
                        </li>
                        {
                            !user &&
                            <React.Fragment>
                                <li className="nav-item">
                                    <NavLink onClick={this.handleToggle} className="nav-link" to="/login">Login</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink onClick={this.handleToggle} className="nav-link" to="/register">Register</NavLink>
                                </li>
                            </React.Fragment>
                        }
                        {
                            user &&
                            <React.Fragment>
                                <li className="nav-item">
                                    <NavLink onClick={this.handleToggle} className="nav-link" to="/profile">{user.name}</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink onClick={this.handleToggle} className="nav-link" to="/logout">Logout</NavLink>
                                </li>
                            </React.Fragment>
                        }
                    </ul>
                </div>
            </nav>
        );
    }
}
 
export default Navbar;