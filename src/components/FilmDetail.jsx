import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ReviewForm from "./ReviewForm";

const FilmDetail = () => {
    const { id } = useParams();
    const [film, setFilm] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3000/movies/${id}`)
            .then(res => res.json())
            .then(data => setFilm(data))
            .catch(err => console.error("Errore nel recupero del film:", err));
    }, [id]);
    
    const handleNewReview = (newReview) => {
        setFilm((prevFilm) => ({
            ...prevFilm,
            reviews: [...prevFilm.reviews, newReview],
        }));
    };

    if (!film) return <p>Caricamento...</p>;

    return (
        <div className="film-detail-container">
            <img src={film.image} alt={film.title} className="film-image" />
            <h1 className="film-title">{film.title}</h1>
            <p className="film-info"><span>Regista:</span> {film.director}</p>
            <p className="film-info"><span>Genere:</span> {film.genre}</p>
            <p className="film-info"><span>Anno di uscita:</span> {film.release_year}</p>

            {/* Sezione Recensioni */}
            <h2>Recensioni</h2>
            {film.reviews && film.reviews.length > 0 ? (
                <ul className="reviews-list">
                    {film.reviews.map(review => (
                        <li key={review.id} className="review-item">
                            <strong>{review.name}</strong>: {review.text}
                            <span className="review-rating">⭐ {review.vote}/5</span>
                            <p className="review-date">📅 {new Date(review.created_at).toLocaleDateString()}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Ancora nessuna recensione per questo film.</p>
            )}
            <ReviewForm movieId={id} onNewReview={handleNewReview} />
        </div>
    );
};

export default FilmDetail;
