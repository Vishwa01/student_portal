import React from 'react';
import { Navbar, NavbarBrand, NavbarText } from 'reactstrap';

const Header = (props) => {
    return (
        <div>

            <Navbar color="light" light expand="md">
                <div className="container">
                    <div className="row">
                        <div className="ml-6">
                            <NavbarBrand href="/">Soulip</NavbarBrand>
                            <NavbarText >Create Homework (Science)</NavbarText>
                        </div>
                    </div>
                </div>
            </Navbar>
        </div >
    );
}
export default Header;