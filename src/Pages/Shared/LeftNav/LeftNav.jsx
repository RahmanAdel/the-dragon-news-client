import React from 'react';
import './LeftNav.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';
import EditorsInsights from '../../News/EditorsInsights/EditorsInsights';
import { Col, Container, Row } from 'react-bootstrap';

const LeftNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.error(error));
    }, []);
    return (
        <div>
            <h4 className='mb-2'>All Categories</h4>
            <div>
                {
                    categories.map(category =>
                        <h5 key={category.id}
                        >
                            <Link to={`/category/${category.id}`} className='text-decoration-none text-black'>
                                <ListGroup>
                                    <ListGroup.Item>{category.name}</ListGroup.Item>
                                </ListGroup>
                            </Link>
                        </h5>)
                }
            </div>
            <EditorsInsights></EditorsInsights>




        </div>
    );
};

export default LeftNav;