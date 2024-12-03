import React, { useState } from 'react';

const Tour = ({ id, name, info, image, price, removeTour }) => {
    const [showMore, setShowMore] = useState(false);

    return (
        <article className="tour">
            <img src={image} alt={name} />
            <div className="tour-info">
                <h4>{name}</h4>
                <h5 className="tour-price">${price}</h5>
                <p>
                    {showMore ? info : `${info.substring(0, 200)}...`}
                    <button className="toggle-btn" onClick={() => setShowMore(!showMore)}>
                        {showMore ? 'See less' : 'Show more'}
                    </button>
                </p>
                <button className="delete-btn" onClick={() => removeTour(id)}>
                    Not Interested
                </button>
            </div>
        </article>
    );
};

export default Tour;
