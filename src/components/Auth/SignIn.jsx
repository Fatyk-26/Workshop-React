import React, { useState } from 'react';
import { Form, Button, Card, Container, Alert } from 'react-bootstrap';
import { auth } from '../../services/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate, Link } from 'react-router-dom';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setError('');
            setLoading(true);
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/');
        } catch (e) {
            setError('Failed to sign in. Please check your email and password.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container style={{ maxWidth: '400px' }} className="d-flex align-items-center justify-content-center mt-5">
            <Card className="w-100">
                <Card.Body>
                    <h2 className="text-center mb-4">Sign In</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" id="email">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </Form.Group>
                        <Form.Group className="mb-3" id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                        </Form.Group>
                        <Button disabled={loading} className="w-100" type="submit">
                            Sign In
                        </Button>
                    </Form>
                    <div className="w-100 text-center mt-3">
                        Need an account? <Link to="/signup">Sign Up</Link>
                    </div>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default SignIn;