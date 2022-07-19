const router = require("express").Router();
const Movie = require("../models/Movie");


router.post("/", async(req, res) =>{
    if(req.user.isAdmin){
        const newMovie = new Movie(req.body);

        try{
            const savedMovie = await newMovie.save();

            res.status(201).json(savedMovie)


        }catch(err){
            res.status(500).json(err)
        }

    }else{
        res.status(403).json("You are not allowed!")
    }

})

router.put("/:id", async(req, res) =>{
    if(req.user.isAdmin){

        try{
            const updatedMovie = await Movie.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true})

            res.status(200).json(updatedMovie)


        }catch(err){
            res.status(500).json(err)
        }

    }else{
        res.status(403).json("You are not allowed!")
    }

})

router.delete("/:id", async(req, res) =>{
    if(req.user.isAdmin){

        try{
            await Movie.findByIdAndDelete(req.params.id)

            res.status(200).json("The movie has been deleted")


        }catch(err){
            res.status(500).json(err)
        }

    }else{
        res.status(403).json("You are not allowed!")
    }

})


router.get("/find/:id", async(req, res) =>{

        try{
            const movie = await Movie.findById(req.params.id)

            res.status(200).json(movie)


        }catch(err){
            res.status(500).json(err)
        }


})

router.get("/random", async(req, res) =>{
    const type = req.query.type;
    let movie;

    try{
        if(type === "whiteboard"){
            movie = await Movie.aggregate([
                {$match:{isWhiteBoard:true}}, 
                {$sample: {size: 1}},
            ])

        }else{
            movie = await Movie.aggregate([
                {$match:{isWhiteBoard:false}}, 
                {$sample: {size: 1}},
            ])
        }
        res.status(200).json(movie);


    }catch(err){
        res.status(500).json(err)
    }


})

router.get("/", async(req, res) =>{
    if(req.user.isAdmin){

        try{
            const movies = await Movie.find()

            res.status(200).json(movies.reverse())


        }catch(err){
            res.status(500).json(err)
        }

    }else{
        res.status(403).json("You are not allowed!")
    }

})






module.exports = router