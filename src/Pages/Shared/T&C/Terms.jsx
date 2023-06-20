import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <Container>
            <h2>Terms & Conditions</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam veritatis autem quibusdam voluptas numquam sapiente minima illo facere maxime aliquid.</p>
            <p>Go Back To <Link to='/register'>Register</Link> </p>

        </Container>
    );
};

export default Terms;