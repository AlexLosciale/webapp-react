import FilmCard from "./filmCard";
import { useState, useEffect } from "react";

const Home = () => {
    const [films, setFilms] = useState([]);

    const fetchFilms = async () => {
        try {
            const response = await fetch('http://localhost:3000/movies');
            const data = await response.json();
            setFilms(data);
        } catch (error) {
            console.error('Error fetching films:', error);
        }
    };

    useEffect(() => {
        fetchFilms();
    }, []);

    const renderFilms = () => {
        return films.map((film) => (
            <div key={film.id}>
                <FilmCard film={film} />
            </div>
        ));
    };

    return (
        <div>
            <h1 className="titolo">FILM DEL CATALOGO NETFLIX</h1>
            <div className="Container">
                {renderFilms()}
            </div>
        </div>
    );
};

export default Home;