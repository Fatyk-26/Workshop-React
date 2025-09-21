import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useCart } from '../../contexts/CartContext';

const ProductCard = ({ product }) => {
    const { addToCart } = useCart();

    return (
        <Card className="h-100 shadow-sm">
            <Card.Img variant="top" src={product.image} style={{ height: '200px', objectFit: 'contain' }} />
            <Card.Body className="d-flex flex-column">
                <Card.Title className="fw-bold fs-6">{product.title}</Card.Title>
                <Card.Text className="text-secondary flex-grow-1">
                    ${product.price}
                </Card.Text>
                <Button variant="primary" onClick={() => addToCart(product)}>
                    Add to Cart
                </Button>
            </Card.Body>
        </Card>
    );
};

export default ProductCard;