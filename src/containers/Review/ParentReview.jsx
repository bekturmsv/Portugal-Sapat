import React from 'react';
import ReviewList from './ReviewList'
import Review from './Review'

const ParentReview = () => {
    return (
        <div>
            <ReviewList/>
            <Review />
        </div>
    );
};

export default ParentReview;