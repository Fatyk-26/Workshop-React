import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="bg-light text-center text-lg-start border-top mt-auto">
            <Container className="p-4">
                <div className="text-center p-3">
                    © {new Date().getFullYear()} E-Commerce Site. All Rights Reserved.
                </div>
            </Container>
        </footer>
    );
};

export default Footer;