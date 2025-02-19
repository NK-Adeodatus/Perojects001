import { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import fetchMovies from "./imdb"

export default function Favorites() {
    const [movies, setMovies] = useState([])
    
    useEffect(() => {
        const cashedMovies = localStorage.getItem("movies")
        if(cashedMovies) {
            setMovies(JSON.parse(cashedMovies))
            
        }
        else {
            fetchMovies()
            .then((response) => {
                setMovies(response)
                localStorage.setItem("movies", JSON.stringify(response))
            })
            .catch((err) => console.log(err))
        }
    },[])
     
    return (
        <main>
            <h1>Favorites</h1>
            <div>
                <div className="every-movie">
                    { movies &&
                        movies.map((movie) => {
                            if(movie.averageRating > 7){

                                return (
                                    <Link to={`/movies/${movie.id}`}>
                                <div className='container' key={movie.id}>
                                    <div className="image-container">
                                        <img src={movie.primaryImage} alt="" />
                                        <div className="hd-tag">HD</div>
                                    </div>
                                    <p className="movie-name">{movie.primaryTitle}</p>
                                    <p className="dutation">{`${movie.runtimeMinutes} min`}</p>
                                    <div className="rating">
                                        <img src="https://www.svgrepo.com/show/13674/star.svg" alt="Star img" className='star'/>
                                        <p className="num-of-likes">{movie.averageRating}</p>
                                    </div>
                                </div>
                                </Link>
                            )
                        }
                        })
                    }
                </div>
            </div>
        </main>
    )
}