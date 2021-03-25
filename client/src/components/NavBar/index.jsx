import React, { Component } from 'react';
import NewLetterBtn from './NewLetterBtn';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light mb-3">
        <div>
          <NewLetterBtn createNewMail={this.props.createNewMail}>
            New mail
          </NewLetterBtn>
          <Link className="mr-3" to="/contacts">
            Contacts
          </Link>
          <Link className="mr-3" to="/settings">
            Settings
          </Link>
        </div>
        <form className="form-inline">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </nav>
    );
  }
}

export default NavBar;
