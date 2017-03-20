import React, { Component } from 'react';
import {Nav, MenuItem, NavDropdown, Row, Grid } from 'react-bootstrap';

class Submenu extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Nav bsStyle="tabs" activeKey="1" onSelect={this.handleSelect}>
          <NavDropdown eventKey="4" title="Camping" id="nav-dropdown">
            <MenuItem eventKey="4.1">Action</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey="4.2">Another action</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey="4.3">Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey="4.4">And more</MenuItem>
          </NavDropdown>
            <NavDropdown eventKey="4" title="Clothing" id="nav-dropdown">
              <MenuItem active eventKey="4.1">Outerwear</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey="4.2">Hiking Shoes / Boots</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey="4.3">Gloves</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey="4.4">Hats</MenuItem>
            </NavDropdown>
            <NavDropdown eventKey="4" title="Fishing" id="nav-dropdown">
              <MenuItem eventKey="4.1">Action</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey="4.2">Another action</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey="4.3">Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey="4.4">And more</MenuItem>
            </NavDropdown>
            <NavDropdown eventKey="4" title="Hiking" id="nav-dropdown">
              <MenuItem eventKey="4.1">Action</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey="4.2">Another action</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey="4.3">Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey="4.4">And more</MenuItem>
            </NavDropdown>
            <NavDropdown eventKey="4" title="Biking" id="nav-dropdown">
              <MenuItem eventKey="4.1">Action</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey="4.2">Another action</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey="4.3">Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey="4.4">And more</MenuItem>
            </NavDropdown>
          </Nav>
        </Row>
      </Grid>
    );
  }
}

export default Submenu;
