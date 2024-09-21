import React, { useState } from 'react';

const RecipeCard = ({ title, image, description, Price }) => {
    const [loading, setLoading] = useState(false);

    const handleOrderClick = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            alert('Order placed!');
        }, 2000);
    };

    return (
        <div className="recipe-card">
            <img src={image} alt={title} className='img1'/>
            <div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <h5>{title}</h5>
                    <p>₹{Price} for one</p>
                </div>

                {loading ? (
                    <div className="loader"></div>
                ) : (
                    <button onClick={handleOrderClick} className="btn btn-primary">
                        Order
                    </button>
                )}
            </div>
        </div>
    );
};

export default RecipeCard;
