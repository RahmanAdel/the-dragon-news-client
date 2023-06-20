import React from 'react';
import Header from '../../Pages/Shared/Header/Header';
import Footer from '../../Pages/Shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import RightNav from '../../Pages/Shared/RightNav/RightNav';
import { Outlet } from 'react-router-dom';

const NewsLayout = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg={9}>
                        <Outlet></Outlet>
                    </Col>

                    <Col className='text-center' lg={3}>
                        <div>
                            <RightNav></RightNav>
                        </div>
                    </Col>
                </Row>

            </Container >
            <Footer></Footer>
        </div>
    );
};

export default NewsLayout;