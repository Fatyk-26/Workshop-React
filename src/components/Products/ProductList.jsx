import React, { useEffect, useState } from 'react';
import { getProducts } from '../../services/api';
import ProductCard from '../Common/ProductCard';
import { Row, Col, Spinner } from 'react-bootstrap';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            const data = await getProducts();
            setProducts(data);
            setLoading(false);
        };
        fetchProducts();
    }, []);

    if (loading) {
        return (
            <div className="d-flex justify-content-center mt-5">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
        );
    }

    return (
        <Row xs={1} md={2} lg={4} className="g-4">
            {products.map((product) => (
                <Col key={product.id}>
                    <ProductCard product={product} />
                </Col>
            ))}
        </Row>
    );
};

export default ProductList;