import { useState, useEffect } from 'react'
import { Link, useSearchParams, useLoaderData } from "react-router-dom"
import fetchMovies from "./imdb"

export default function Movies() {
    const [movies, setMovies] = useState([])
    const [searchParams, setSearchParams] = useSearchParams()
    const [loading, setLoading] = useState(true)
    console.log("hello 0");
    console.log(movies);
    let genreFilter = searchParams.get('genre')    
    console.log(genreFilter);
    
    let filteredGenre = genreFilter ? movies.filter((video) =>
        video.genres.includes(genreFilter.charAt(0).toUpperCase() + genreFilter.slice(1)) 
    ) : movies
    console.log(filteredGenre);
    
    
    useEffect(() => {
        const cashedMovies = localStorage.getItem("movies")
        console.log("hello 1");
        
            if(cashedMovies) {
                setTimeout(() => {

                    setMovies(JSON.parse(cashedMovies))
                    setLoading(false)
                    console.log("hello 2");
                }, 1000)
            
        }
        else {
            fetchMovies()
            // No need for the first .then that has .json() function because it has already been used in the imdb.js 
            // when fetched data was turned from json into real objects and arrays. 
            .then((response) => {
                setMovies(response)
                localStorage.setItem("movies", JSON.stringify(response))
                setLoading(false)
                console.log("hello 3");
            })
            .catch((err) => console.log(err))
        }
    },[])

    if(loading){
        return (
            <h1>Loading...</h1>
        )
    }
     
    return (
        <main>
            <h1>Trending</h1>
            <button onClick={() => setSearchParams({genre: "action"})} id='action-btn'>Action</button>
            <button onClick={() => setSearchParams({genre: "adventure"})} id='adventure-btn'>Adventure</button>
            {genreFilter ? (<button onClick={() => setSearchParams({})} id='clear-btn'>Clear</button>) : null}
            <div>
                <div className="every-movie">
                    { filteredGenre &&
                        filteredGenre.map((movie) => {
                            return (
                                <Link 
                                to={`/movies/${movie.id}`}
                                state={{searched: `?${searchParams.toString()}`}}
                                >
                                <div className='container' key={movie.id}>
                                    <div className="image-container">
                                        <img src={movie.primaryImage} alt="" />
                                        <div className="hd-tag">HD</div>
                                    </div>
                                    <p className="movie-name">{movie.primaryTitle}</p>
                                    <p className="duration">{`${movie.runtimeMinutes} min`}</p>
                                    <div className="rating">
                                        <img src="https://www.svgrepo.com/show/13674/star.svg" alt="Star img" className='star'/>
                                        <p className="num-of-likes">{movie.averageRating}</p>
                                    </div>
                                </div>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        </main>
    )
}