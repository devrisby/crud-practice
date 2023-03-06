const Movie = ({movie}) => {
    return (
        <div className="movie">
            <p>{movie.title}</p>
            <p>{movie.year}</p>
        </div>
    )
}

export default Movie