import { useState, useEffect } from "react"
import { Link, useParams, useLocation, useLoaderData } from "react-router-dom"
import { requireAuth } from "./utils"

export function movieLoader() {
    requireAuth()
    let cashedMovies = localStorage.getItem('movies')
    return JSON.parse(cashedMovies)
}

export default function MovieId() {
    // const [movie, setMovie] = useState([])
    let location = useLocation()
    let search = location.state?.searched || ""
    console.log(location)

    const movie = useLoaderData()
    console.log(movie);
    

    let params = useParams()
    console.log(params)
    return(
        
        <main>
            <div className="back-to-allMovies-container">
                <Link 
                to={`..${search }`}
                relative="path"
                id="back-to-allMovies"
                >Back to all movies</Link>
            </div>
        {movie.map((film) => 

<section key={film.id}>
            {film.id === params.id && 
                <div className="div-id-container">
                    <img src={film.primaryImage} alt="" className="movie-picture" />
                    <div className="secondpart">

                    <div>
                        <div>
                            <div>
                                <h1>{film.primaryTitle}</h1>
                                <div>
                                    <div className="type-title-container">

                                        <div className="movie-type">{`Type: ${film.type}`}</div>
                                    </div>
                                    <div className="rating-Id">
                                        <img src="https://www.svgrepo.com/show/13674/star.svg" alt="" className="star-img" />
                                        <p className="likes-rating">{film.averageRating}</p>
                                    </div>
                                    <p className="movie-duration">{`${film.runtimeMinutes} min`}</p>
                                    </div>
                                    </div>
                                    </div>
                                    <div>
                                    
                        </div>
                        <div>
                            <div>
                                <p>{`Votes: ${film.numVotes}`}</p>
                            </div>
                            <div>
                                <button id="like-btn">Like</button>
                                <button id="like-btn">Dislike</button>
                            </div>
                        </div>
                    </div>
                    <div className="discriptionContainer">
                        <p>{`Discription: ${film.description}`}</p>
                    </div>
                    <p>{`Country: ${film.filmingLocations ? film.filmingLocations[0] : ""}`}</p>
                    <p>{`Genres: ${film.genres}`}</p>
                    <p>{`Release Date: ${film.releaseDate}`}</p>
                    </div>
                    
                </div>
            }
            </section>
        )
    }
        </main>
    )
}