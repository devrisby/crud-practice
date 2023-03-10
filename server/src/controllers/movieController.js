import Movie from '../model/Movie.js';

//Create new movie
async function addMovie(req, res) {
  try {
  const movie = new Movie(req.body);
  await movie.save();
  res.json(movie);
  } catch { return res.status(400).json({error: "400"}); }
}

//Get a movie by ID
async function getMovie(req, res) {
  try {
  const movie = await Movie.findById(req.params.id);
  if (!movie) {
    return res.status(404).json({ error: 'No movie found.' });
  }
  res.json(movie);
} catch {
   res.status(400).json({error: "Invalid Id"});
}
}

//Get all movies
async function getAllMovies(req, res) {
  const movies = await Movie.find({});
  res.json(movies);
}

//Update a movie by ID
async function updateMovie(req, res) {
try {
  const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, {new: true});
  if (!movie) {
      res.status(404).json({error: "Movie not found"})
  } else {
      res.status(201).json(movie);
    }

  } catch (err) {
      res.status(400).json({ error: err })
  } 
}


//Delete a movie
async function deleteMovie(req, res) {
try {
  const movie = await Movie.findByIdAndDelete(req.params.id);
  if (!movie)
  {
    res.status(400).json({error: "Invalid Id"});
  }  else {
  res.status(204).send(); }

   } catch(e) {
    res.status(400).json({error: e});
  }
}

export default  { addMovie, getMovie, getAllMovies, updateMovie, deleteMovie }