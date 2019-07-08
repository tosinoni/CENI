import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

import { Link } from 'react-router-dom'

import classNames from 'classnames'

export default class NavBar extends React.Component {

  render() {
    return (
      <Navbar color="dark" dark expand="md">
        <NavbarBrand tag={Link} to="/">
          <img src="https://www.ciena.com/includes/prx-logo.svg" /> CENI
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={false} navbar>
          <Nav className="ml-auto" navbar>
          <NavItem>
              <NavLink tag={Link} to="/performance-status">PERFORMANCE-STATUS</NavLink>
            </NavItem>
            <NavItem>
              <NavLink target="_blank" href="http://10.181.39.1">BP-ANALYTICS</NavLink>
            </NavItem>
            <NavItem>
              <NavLink target="_blank" href="http://10.181.39.7">BP-MCP</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    )
  }
}