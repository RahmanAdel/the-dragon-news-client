import logo from '../../../assets/logo.png';
import moment from 'moment';
import { Button, Container } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
const Header = () => {


    return (
        <Container>
            <div className="text-center mt-3">
                <img src={logo} alt="" />
                <p className='text-secondary'><small>Journalism Without Fear Or Favor</small></p>
                <p>{moment().format("dddd, MMMM DD, YYYY")}</p>
            </div>
            <div className='d-flex flex-row align-items-center border border-2 p-2 rounded-2 mb-4'>
                <div>
                    <Button variant="outline-danger">Latest</Button>
                </div>
                <div className='ps-2'>
                    <Marquee speed={25}>
                        Breaking News: Flat Earthers are now coming out as vegetarians. || Hello World! Welcome To Dargon News Client!
                    </Marquee>
                </div>
            </div>
        </Container >
    );
};

export default Header; <h2>Header</h2>;