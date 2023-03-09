
import express from "express";
const router = express.Router();
import movieController from "../../controllers/movieController.js";

router.get('/api/movies', movieController.getAllMovies);
router.post('/api/movies', movieController.addMovie);
router.post('/api/movies/:id', movieController.getMovie);
router.put('/api/movies/:id', movieController.updateMovie);
router.delete('/api/movies/:id',movieController.deleteMovie);

export default router;