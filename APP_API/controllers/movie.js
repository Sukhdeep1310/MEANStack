const Movie = require("../../APP_SERVER/model/movie")


const getMovies = function (req, res) {
    Movie.find().exec(function (err, moviedata) {
        if (err) {
            res
                .status(404)
                .json(err);
            return
        }
        res
            .status(200)
            .json(moviedata);

    });

};

const createMovie = function (req, res) {

    Movie.create({
        name: req.body.name,
        category: req.body.category,
        price: req.body.price,
        starcast: req.body.starcast,
        language:req.body.language,
        description:req.body.description
    },(err , moviedata) => {
        if (err) {
            res.status(400)
                .json(err);
        } else {

            res
                .status(201)
                .json(moviedata);
        }
    });

};

const getSingleMovie = function (req, res) {
    Movie
        .findById(req.params.movieid)
        .exec((err, movie) => {
            if (!movie){
                return res
                    .status(404)
                    .json({
                        "message": "Movie not Found."
                    });
            } else if(err){
                return res
                    .status(404)
                    .json(err);
            }
            res
                .status(200)
                .json(movie);
        });
};


const updateMovie = function(req,res){
    if(!req.params.movieid){
        res
            .status(404)
            .json({
                "message" : "Not found, movieid is required"
            });
        return;
    }
    Movie.findById(req.params.movieid)
        .exec((err, moviedata) => {
            if(!moviedata){
                res

                    .status({"message": "movieid not found"})
                    .json(404);
                return;
            }
            else if (err){
                res
                    .status(400)
                    .json(err);
                return;
            }
            moviedata.name = req.body.name;
            moviedata.category = req.body.category;
            moviedata.price=req.body.price;
            moviedata.starcast= req.body.starcast;
            moviedata.language= req.body.language;
            moviedata.description= req.body.description;
            moviedata.save((err,moviedata) =>{
                if(err){
                    res
                        .status(404)
                        .json(err);

                }
                else{
                    res
                        .status(200)
                        .json(moviedata);
                }
            });
        });

};

const deleteMovie = function (req, res) {

    const movieid = req.params.movieid;
    if(movieid) {
        Movie
            .findByIdAndRemove(movieid)
            .exec((err, moviedata) => {
                if (err) {
                    res.status(404)
                        .json(err);
                    return;
                }

                res
                    .status(204)
                    .json(null);
            });
    } else {
        res.status(404)
            .json({"message":"No movieid"})
    }

};

module.exports ={
    getMovies,createMovie,getSingleMovie,updateMovie,deleteMovie
};