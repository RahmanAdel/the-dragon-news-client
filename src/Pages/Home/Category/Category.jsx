import React from 'react';
import './Category.css';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';

const Category = () => {
    const { id } = useParams();
    const categoryNews = useLoaderData();
    return (
        <div className='mt-3'>
            {id && <h4>Category News For Today: {categoryNews.length}</h4>}
            {
                categoryNews.map(news =>
                    <NewsCard
                        key={news._id}
                        news={news}
                    >

                    </NewsCard>)
            }
        </div>
    );
};

export default Category;