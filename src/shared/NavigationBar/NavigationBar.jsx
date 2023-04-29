import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../../Providers/AuthProviders';


const NavigationBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
    }


    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            {/* <Link>Home</Link> */}
                            <Link className='text-decoration-none text-success-emphasis' to='/category/0'>Home</Link>
                            <Link className='ms-2 text-decoration-none text-success-emphasis'>About</Link>
                            <Link className='ms-2 text-decoration-none text-success-emphasis'>Career</Link>


                        </Nav>
                        <Nav>
                            {<FaUserCircle style={{ fontSize: '2rem' }}></FaUserCircle>}

                            {user ?
                                <Button onClick={handleLogOut} variant="secondary">Logout</Button> :
                                <Link to='/login'>
                                    <Button variant="secondary">Login</Button>
                                </Link>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;