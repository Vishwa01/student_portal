import React from 'react';
import { Navbar, NavLink } from 'reactstrap';
import { ArrowBack, Search, Eco } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';

const SecondScreenHeader = () => {
    return (
        < div >
            <Navbar color="light" light  >
                <IconButton>
                    <ArrowBack />
                </IconButton>
                <NavLink>
                    <h4>Student Details</h4>
                </NavLink>
                <IconButton>
                    <Search />
                </IconButton>
            </Navbar>
            <Navbar color="light" light >
                <div className="container">
                    <div className="row">
                        <div className="col-4">
                            <Eco />
                        </div>
                        <div className="col-8">
                            <h5>Science</h5>
                            <h6>Homework_1</h6>
                        </div>
                    </div>
                </div>
            </Navbar>

        </div >
    );
}
export default SecondScreenHeader;