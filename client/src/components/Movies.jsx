import Movie from "./Movie"

const Movies = ({movies}) => {
    return (
        <div className="movies">
            {movies.map((m,i) => <Movie key={i} movie={m} />)}
        </div>
    )
}

export default Movies