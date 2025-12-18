import express from "express";
import dino from "./dino.js";

import postsRouter from "./routers/posts.js";

const app = express();
const port = 3000;

app.use(express.static('public'));

app.get("/", (req, res) => {
    res.send("Server del mio blog");
});


app.get("/bacheca", (req, res) => {



    const caratteristiche = req.query.tags;
    console.log(caratteristiche);

    let filteredDino = dino;

    if (caratteristiche !== undefined) {
        filteredDino = dino.filter((dinosauro) =>
            dinosauro.tags.includes(caratteristiche)
        );

        const risposta = {
            count: filteredDino.length,
            results: filteredDino,
        };

        res.json(risposta)
    }




});

// router dei post
app.use("/posts", postsRouter);



app.listen(port, () => {
    console.log("funziona");
});
