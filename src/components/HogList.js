
import React, { useState } from "react";

function HogList({ addHog }) {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [specialty, setSpecialty] = useState("");
    const [weight, setWeight] = useState("");
    const [greased, setGreased] = useState(false);
    const [highestMedal, setHighestMedal] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const newHog = {
            name,
            image,
            specialty,
            weight: parseFloat(weight),
            greased,
            "highest medal achieved": highestMedal,
        };
        addHog(newHog);
        setName("");
        setImage("");
        setSpecialty("");
        setWeight("");
        setGreased(false);
        setHighestMedal("");
    };

    return (
        <form onSubmit={handleSubmit} className="hog-form">
            <h3>Add a New Hog</h3>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Image URL"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Specialty"
                value={specialty}
                onChange={(e) => setSpecialty(e.target.value)}
            />
            <input
                type="number"
                placeholder="Weight"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                required
            />
            <label>
                Greased:
                <input
                    type="checkbox"
                    checked={greased}
                    onChange={(e) => setGreased(e.target.checked)}
                />
            </label>
            <input
                type="text"
                placeholder="Highest Medal Achieved"
                value={highestMedal}
                onChange={(e) => setHighestMedal(e.target.value)}
            />
            <button type="submit">Add Hog</button>
        </form>
    );
}

export default HogList;
