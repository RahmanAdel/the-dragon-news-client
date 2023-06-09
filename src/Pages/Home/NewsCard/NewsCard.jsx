import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { FaEye, FaRegBookmark, FaRegStar, FaShareAlt, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';

const NewsCard = ({ news }) => {
    const { _id, title, details, image_url, author, total_view, rating } = news;
    return (
        <div>
            <Card className="mb-4">
                <Card.Header className='d-flex align-items-center'>
                    <Image style={{ height: '40px' }} src={author?.img} roundedCircle></Image>
                    <div className='ps-2 flex-grow-1 pt-3 ms-3'>
                        <p className='mb-0'>
                            {author?.name}
                        </p>
                        <p>
                            <small>
                                {moment(author.published_date).format("MM-DD-YYYY")}
                            </small>
                        </p>
                    </div>
                    <div>
                        <FaRegBookmark></FaRegBookmark>
                        <FaShareAlt></FaShareAlt>
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img variant="top" src={image_url} />
                    <Card.Text>
                        {details.length < 250 ? <>{details}</> :
                            <>{details.slice(0, 250)}... <Link to={`/news/${_id}`}><small>Read More</small></Link> </>
                        }
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted d-flex align-items-center">
                    <div className='flex-grow-1 d-flex align-items-center'>
                        <div>
                            <Rating
                                placeholderRating={rating.number}
                                readonly
                                emptySymbol={<FaRegStar></FaRegStar>}
                                placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                                fullSymbol={<FaStar></FaStar>}
                            />
                        </div>
                        <div className='pt-1'>
                            {rating?.number}
                        </div>

                    </div>

                    <div>
                        <FaEye></FaEye> {total_view}
                    </div>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default NewsCard;