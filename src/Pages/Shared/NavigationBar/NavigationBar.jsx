import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';

const NavigationBar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error));
    };


    return (
        <Container className='mb-4'>
            <Navbar collapseOnSelect expand="lg" bg='light' variant='light'>
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Link to='/category/0'>Home</Link >
                            <Nav.Link href="#about">About</Nav.Link>
                        </Nav>
                        <Nav>
                            {
                                user &&
                                <FaUserCircle style={{ fontSize: '2rem', marginTop: '5px' }} ></FaUserCircle>
                            }
                            {
                                user ?
                                    <Button onClick={handleLogOut} variant="secondary">Logout</Button> :
                                    <Link to='/Login'>
                                        < Button variant="secondary">Login</Button>
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