import React from 'react';
import './RightNav.css';
import { Button, Container } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import ListGroup from 'react-bootstrap/ListGroup';
import Qzone from '../QZone/Qzone';
import bg from '../../../assets/bg.png';

const RightNav = () => {
    return (
        <Container>
            <h4>
                Login With
            </h4>
            <div className='d-flex flex-column'>
                <Button className='mb-2' variant="outline-success"><FaGoogle /> Google</Button>
                <Button className='mb-4' variant="outline-success"><FaGithub /> Github</Button>
            </div>
            <div>
                <h4>Find Us On</h4>
                <ListGroup >
                    <ListGroup.Item> <FaFacebook></FaFacebook> Facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter></FaTwitter> Twitter</ListGroup.Item>
                    <ListGroup.Item>
                        <FaInstagram></FaInstagram> Instagram
                    </ListGroup.Item>
                </ListGroup>
            </div>
            <Qzone></Qzone>
            <div>
                <img src={bg} alt="" />
            </div>
        </Container>
    );
};

export default RightNav;