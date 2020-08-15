import PropTypes from "prop-types"
import React from "react"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  // UncontrolledDropdown,
  // DropdownToggle,
  // DropdownMenu,
  // DropdownItem,
  // NavbarText
} from 'reactstrap';

  const Header = (props) => {
    const [isOpen, setIsOpen] = React.useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
    return (
      <div>
        <Navbar fixed="top" light expand="sm">
          <div class="container">
          <NavbarBrand href="/">Sagar Blog</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/team/">Team</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/tags/">Tags</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/about/">About Us</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
          </div>
        </Navbar>
      </div>
    );
  }

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
