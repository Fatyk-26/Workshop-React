import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { useCart } from '../../contexts/CartContext';
import { auth } from '../../services/firebase';
import { signOut } from 'firebase/auth';

const Header = () => {
    const { currentUser } = useAuth();
    const { cart } = useCart();

    const handleSignOut = async () => {
        try {
            await signOut(auth);
        } catch (error) {
            console.error('Failed to sign out', error);
        }
    };

    return (
        <Navbar bg="light" expand="lg" className="border-bottom">
            <Container>
                <Navbar.Brand as={Link} to="/">E-Commerce Site</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/">Products</Nav.Link>
                        {currentUser ? (
                            <>
                                <Nav.Link>Welcome, {currentUser.email.split('@')[0]}</Nav.Link>
                                <Button variant="outline-danger" onClick={handleSignOut}>
                                    Sign Out
                                </Button>
                            </>
                        ) : (
                            <>
                                <Nav.Link as={Link} to="/signin">Sign In</Nav.Link>
                                <Nav.Link as={Link} to="/signup">Sign Up</Nav.Link>
                            </>
                        )}
                        <Nav.Link href="#" className="position-relative">
                            🛒 Cart ({cart.length})
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;