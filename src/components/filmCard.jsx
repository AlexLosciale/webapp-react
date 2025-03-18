import { Link } from "react-router-dom";

const FilmCard = ( {film} ) => {

    const {id, title, director, genre, release_year, image} = film

    return (
        <div>
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>{genre}</p>
            <p>{release_year}</p>
        </div>
    );
};

export default FilmCard;