
import React, { useState } from "react";

function HogTile({ name, image, specialty, weight, greased, highestMedal, hideHog }) {
    const [showDetails, setShowDetails] = useState(false);

    const handleToggleDetails = () => {
        setShowDetails((prev) => !prev);
    };

    const handleHideHog = (e) => {
        e.stopPropagation();
        hideHog(name);
    };

    return (
        <div className="pigTile minPigTile" onClick={handleToggleDetails}>
            <h3>{name}</h3>
            <img src={image} alt={name} className="TwirlyPig" />
            {showDetails && (
                <div className="hog-details">
                    <p><strong>Specialty:</strong> {specialty}</p>
                    <p><strong>Weight:</strong> {weight} lbs</p>
                    <p><strong>Greased:</strong> {greased ? "Yes" : "No"}</p>
                    <p><strong>Highest Medal Achieved:</strong> {highestMedal}</p>
                </div>
            )}
            <button onClick={handleHideHog}>
                Hide
            </button>
        </div>
    );
}

export default HogTile;

