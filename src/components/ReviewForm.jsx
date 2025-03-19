import { useState } from "react";

const ReviewForm = ({ movieId, onNewReview }) => {
    const [name, setName] = useState("");
    const [vote, setVote] = useState(1);
    const [text, setText] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const review = { movie_id: movieId, name, vote, text };

        const response = await fetch("http://localhost:3000/reviews", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(review),
        });

        if (response.ok) {
            const newReview = await response.json();
            onNewReview({ id: newReview.id, ...review, created_at: new Date().toISOString() });
            setName("");
            setVote(1);
            setText("");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="review-form">
            <h3>Aggiungi una recensione</h3>
            <input
                type="text"
                placeholder="Il tuo nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <select value={vote} onChange={(e) => setVote(e.target.value)} required>
                {[1, 2, 3, 4, 5].map((n) => (
                    <option key={n} value={n}>{n} ⭐</option>
                ))}
            </select>
            <textarea
                placeholder="Scrivi la tua recensione..."
                value={text}
                onChange={(e) => setText(e.target.value)}
                required
            />
            <button type="submit">Invia</button>
        </form>
    );
};

export default ReviewForm;
